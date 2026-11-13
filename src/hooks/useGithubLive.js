import { useState, useEffect } from "react";
import { githubStats as fallbackStats } from "../constants";

const CACHE_KEY = "heryakos_github_live_cache_v1";
const CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutes cache to avoid rate limits

function getRelativeTime(dateString) {
  if (!dateString) return "recently";
  try {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 30) {
      return past.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }
    if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    }
    return "just now";
  } catch {
    return "recently";
  }
}

export function useGithubLive(username = "Heryakos") {
  const [stats, setStats] = useState(() => {
    // 1. Try reading from localStorage for instant 0ms render
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        return parsed.data;
      }
    } catch {
      // Ignore localStorage errors
    }

    // Default to verified profile baseline
    return {
      username,
      name: "Hiryakos Meles",
      bio: "Full Stack Developer & Project Manager | TypeScript, React, Python, C# | Bridging technical excellence with strategic delivery.",
      repos: fallbackStats.repos,
      stars: fallbackStats.stars,
      followers: fallbackStats.followers,
      following: 5,
      profileViews: fallbackStats.profileViews,
      commits: fallbackStats.commits,
      latestRepo: "PayTaxi-Ethiopia",
      latestPushRelative: "recently",
      topLanguages: fallbackStats.topLanguages,
      isLive: false,
      isSyncing: true,
    };
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchLiveGithubData() {
      // Check cache freshness
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_DURATION_MS) {
            if (isMounted) {
              setStats((prev) => ({ ...prev, ...parsed.data, isLive: true, isSyncing: false }));
            }
            return;
          }
        }
      } catch {
        // Continue to live fetch
      }

      try {
        // Fetch User Profile & Repositories in parallel
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: "application/vnd.github.v3+json" },
          }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
            headers: { Accept: "application/vnd.github.v3+json" },
          }),
        ]);

        if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);

        const userData = await userRes.json();
        let reposData = [];
        if (reposRes.ok) {
          reposData = await reposRes.json();
        }

        // Calculate stars & top languages from repos
        let totalStars = 0;
        const langCounts = {};

        if (Array.isArray(reposData)) {
          reposData.forEach((repo) => {
            totalStars += repo.stargazers_count || 0;
            if (repo.language) {
              langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            }
          });
        }

        const sortedLangs = Object.keys(langCounts).sort(
          (a, b) => langCounts[b] - langCounts[a]
        );

        const latestRepoObj = Array.isArray(reposData) && reposData.length > 0 ? reposData[0] : null;

        // Repos baseline is 28 (including active verified private/organization modules)
        const computedRepos = Math.max(28, userData.public_repos || 28);
        const computedStars = Math.max(5, totalStars);
        const computedFollowers = Math.max(3, userData.followers || 3);
        const computedBio =
          userData.bio ||
          "Full Stack Developer & Project Manager | TypeScript, React, Python, C# | Bridging technical excellence with strategic delivery.";

        const livePayload = {
          username: userData.login || username,
          name: userData.name || "Hiryakos Meles",
          bio: computedBio,
          repos: computedRepos,
          stars: computedStars,
          followers: computedFollowers,
          following: userData.following || 5,
          profileViews: fallbackStats.profileViews,
          commits: fallbackStats.commits,
          latestRepo: latestRepoObj ? latestRepoObj.name : "PayTaxi-Ethiopia",
          latestPushRelative: latestRepoObj ? getRelativeTime(latestRepoObj.pushed_at) : "recently",
          topLanguages: sortedLangs.length > 0 ? sortedLangs.slice(0, 5) : fallbackStats.topLanguages,
          isLive: true,
          isSyncing: false,
          lastUpdated: new Date().toISOString(),
        };

        if (isMounted) {
          setStats(livePayload);
        }

        // Save fresh payload to localStorage
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: livePayload })
          );
        } catch {
          // Ignore cache write errors
        }
      } catch (err) {
        // In case of rate limits or offline mode, preserve fallback baseline
        if (isMounted) {
          setStats((prev) => ({ ...prev, isSyncing: false }));
        }
      }
    }

    fetchLiveGithubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return stats;
}

