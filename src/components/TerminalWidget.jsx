import React, { useState } from "react";

const commandOutputs = {
  status: `● System Health: Healthy & Operational
--------------------------------------------------
OS:          Ubuntu 24.04 LTS (x86_64 Linux 6.8.0-enterprise)
Host:        cloud-cluster-addis-node-01
Uptime:      142 days, 18 hours, 32 mins
Load Avg:    0.18, 0.24, 0.21 (4 vCPUs)
Memory:      4,180 MB / 16,384 MB (25.5% utilized)
Disk Usage:  42.1 GB / 250 GB (NVMe SSD • Read: 3,200 MB/s)
SSL Status:  Let's Encrypt Wildcard Auto-Renew (Valid for 78 days)
Firewall:    UFW Active • Ports: 80, 443, 22 (SSH Keyed only)`,

  services: `● Active Production Daemons (systemd & Supervisor)
--------------------------------------------------
UNIT                        LOAD   ACTIVE SUB     DESCRIPTION
nginx.service               loaded active running High-Performance Reverse Proxy & SSL
frappe-bench-web.service    loaded active running Frappe Gunicorn Workers (8 Workers)
frappe-bench-workers.service loaded active running Supervisor Background Job Queue (Default & Long)
docker.service              loaded active running Docker Application Engine
mariadb.service             loaded active running MariaDB 10.11 Enterprise Database Cluster
postgresql.service          loaded active running PostgreSQL 16 with AWS Connection Pooling
redis-server.service        loaded active running Redis 7.2 In-Memory Cache & Session Broker`,

  docker: `● Running Application Containers (docker ps)
--------------------------------------------------
CONTAINER ID   IMAGE                 COMMAND                  STATUS          PORTS
a8f19c23b412   paytaxi-web:latest    "node server.js"         Up 38 days      0.0.0.0:3000->3000/tcp
e7d21b9804e1   paytaxi-api:prod      "npm run start:prod"     Up 38 days      0.0.0.0:5000->5000/tcp
3c90a12e4f09   postgres-pooler:16    "pgbouncer /etc/pgb..."   Up 90 days      0.0.0.0:5432->5432/tcp
9b441f02c771   fhc-sms-gateway:v2    "python3 app.py"         Up 64 days      127.0.0.1:8080->8080/tcp`,

  bench: `● Frappe Bench Healthcheck (bench doctor)
--------------------------------------------------
Checking bench infrastructure...
✔ Redis Cache:     PING -> PONG (0.28ms)
✔ Redis Queue:     PING -> PONG (0.31ms)
✔ Database (MariaDB): Connected to 'fhcerp_prod' (Latency: 0.8ms)
✔ Background Jobs: 0 Failed | 0 Queued | 12 Workers Idle
✔ Scheduler:       Enabled & Ticking every 60s
✔ Multi-tenancy:   3 Sites Configured (Strict Isolation)
✔ System Status:   ALL PRODUCTION CHECKS PASSED`,
};

const TerminalWidget = () => {
  const [selectedCmd, setSelectedCmd] = useState("status");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commandOutputs[selectedCmd]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl overflow-hidden font-mono text-[13px] text-slate-300">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d121f] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-slate-400 text-[12px] hidden sm:inline">
            hiryakos@enterprise-node-01: ~
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            99.99% Uptime
          </span>

          <button
            onClick={handleCopy}
            className="text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
            title="Copy terminal output"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Preset Command Buttons */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2.5 bg-[#0b101b] border-b border-white/5 text-[11px]">
        <span className="text-slate-500 mr-1 hidden sm:inline">Quick Commands:</span>
        {[
          { key: "status", label: "system-status" },
          { key: "services", label: "systemctl services" },
          { key: "docker", label: "docker ps" },
          { key: "bench", label: "bench doctor" },
        ].map((cmd) => (
          <button
            key={cmd.key}
            onClick={() => setSelectedCmd(cmd.key)}
            className={`px-3 py-1 rounded-md transition-all font-mono ${selectedCmd === cmd.key
              ? "bg-electric-blue text-white font-bold shadow-[0_0_12px_rgba(37,99,235,0.4)]"
              : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
          >
            $ {cmd.label}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 overflow-x-auto min-h-[260px] leading-relaxed bg-[#070a10]">
        <div className="flex items-center gap-2 text-emerald-400 mb-3 font-semibold">
          <span className="text-blue-400">hiryakos@enterprise-node-01</span>
          <span className="text-slate-500">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-slate-500">$</span>
          <span className="text-white">
            {selectedCmd === "status" && "uptime && free -h && df -h"}
            {selectedCmd === "services" && "systemctl list-units --type=service --state=running"}
            {selectedCmd === "docker" && "docker ps --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}'"}
            {selectedCmd === "bench" && "bench --site all doctor"}
          </span>
          <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />
        </div>

        <pre className="text-slate-300 font-mono text-[12px] sm:text-[13px] whitespace-pre-wrap leading-5">
          {commandOutputs[selectedCmd]}
        </pre>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-[#0d121f] border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
        <div>Linux Admin • Docker Swarm • Nginx Reverse Proxy • SSL Automation</div>
        <div className="text-emerald-400/80">● SSH Port 22 • Ed25519 Verified</div>
      </div>
    </div>
  );
};

export default TerminalWidget;

