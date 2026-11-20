/* ============================================================
   THE HOMELAB PLAN. Everything the tracker shows lives here.
   Edit text, prices or steps and save; index.html never changes.
   Keep each "id" as it is: ticks and choices are stored against it.
   Prices are rough US figures from November 2026 (memory and drive
   prices are high and moving), and can be overridden on the page.
   ============================================================ */
window.PLAN = {
  budget: 3000,
  priced: "November 2026",

  goals: [
    ["g-host", "Host this website from home", "The hub and its data jobs run on my own server, with GitHub kept as the backup copy."],
    ["g-drive", "Replace Google Drive", "Files and phone photos sync to storage I own, reachable from anywhere."],
    ["g-rent", "Stop renting apps and servers", "New apps get built and run at home instead of on a paid service."],
    ["g-secure", "Keep it secure", "Nothing exposed to the internet by accident, everything updated, everything backed up."],
    ["g-learn", "Understand advanced networking", "Enough to have a real conversation with the IT company about how work is set up."]
  ],

  /* One choice per group. opt: [id, name, price, summary, good, watch] */
  parts: [
    { id: "server", name: "Server", what: "The computer that runs everything. It runs Proxmox, which splits one machine into many virtual ones.", options: [
      ["srv-tiny", "Used business mini PC, 32 GB", 300, "Lenovo Tiny, Dell Micro or HP Mini, a few years old.", "Silent, sips power (about 10–20 W), fits on a shelf, cheap to replace.", "Limited memory and no room for big drives, so pair it with a NAS."],
      ["srv-ws", "Mini workstation, 64 GB", 1150, "Minisforum MS-01 or MS-A2 class, bought bare and filled with memory and an SSD.", "Quiet, fast, 10-gigabit networking, room for three SSDs and a card.", "New memory is expensive right now; the bare box is only part of the bill."],
      ["srv-r640", "Used Dell PowerEdge R640, 96 GB (the video's pick)", 745, "Bare server about $250, memory about $420, a 1-gigabit network card, drive caddies and a wall mount.", "Huge capacity for the money: two Xeon processors and cheap older memory. Remote management built in.", "Loud enough that it needs a garage or closet. Likely 120–200 W around the clock, which is roughly $200–300 a year in power. Big: about 30 inches deep."],
      ["srv-n150", "New budget mini PC, 16 GB", 200, "A small Intel N150 box.", "Cheapest way to start learning; under 10 W.", "Fine for a few apps, too small for many virtual machines."]
    ] },
    { id: "ssd", name: "Boot drive", what: "A small new SSD that holds Proxmox itself. Buy this one new.", options: [
      ["ssd-new", "New 256–500 GB SSD", 60, "2.5-inch SATA for the Dell, or M.2 for a mini PC.", "New means a known lifespan.", "Mini PCs often include one already; set this to $0 if so."],
      ["ssd-none", "Already included", 0, "The machine ships with an SSD.", "", ""]
    ] },
    { id: "storage", name: "Storage box", what: "Where the “Google Drive” data lives. A separate box means your files survive experiments on the server.", options: [
      ["nas-ugreen", "UGREEN DXP4800 Plus, 4 bays", 657, "Sold without drives. Runs its own system, or TrueNAS if you outgrow it.", "Strong hardware for the price, 10-gigabit port, takes any drive brand.", "Younger software than Synology's."],
      ["nas-syn", "Synology DS925+, 4 bays", 705, "Sold without drives.", "The most polished software and a 3-year warranty.", "Weaker hardware for more money; check its drive compatibility list before buying drives."],
      ["nas-2bay", "UGREEN DXP2800, 2 bays", 340, "Sold without drives.", "Enough for two mirrored drives.", "No bays left to grow into."],
      ["nas-inside", "Drives inside the server (the video's approach)", 0, "Use the server's own drive bays and share storage from Proxmox or a TrueNAS virtual machine.", "No extra box to buy or power.", "Files and experiments share one machine. On the Dell, 2.5-inch server hard drives usually top out near 2.4 TB, so be suspicious of bigger listings."]
    ] },
    { id: "drives", name: "Hard drives", what: "Always at least two, mirrored, so one can die without losing anything. Drive prices have roughly doubled since 2024.", options: [
      ["hdd-2x8", "2 × 8 TB NAS drives (8 TB usable)", 800, "WD Red Plus, Seagate IronWolf or Toshiba N300.", "Plenty for documents and years of phone photos.", "Check they are CMR, not SMR."],
      ["hdd-2x4", "2 × 4 TB NAS drives (4 TB usable)", 390, "Same families, smaller.", "Cheapest sensible start; swap for bigger later.", "Fills quickly if you store video."],
      ["hdd-2x12", "2 × 12 TB NAS drives (12 TB usable)", 1070, "Room for camera footage and media.", "Best price per terabyte among NAS drives.", "A big slice of the budget."],
      ["hdd-sas", "2 × used 2.5-inch SAS drives for the Dell", 150, "About 2 TB each, mirrored.", "Very cheap.", "Small, and used drives need a health check on arrival."]
    ] },
    { id: "gateway", name: "Router and firewall", what: "The front door of the network. This is the piece that teaches the networking you want to learn: VLANs, firewall rules, VPN.", options: [
      ["gw-max", "UniFi Cloud Gateway Max", 199, "For internet plans under about 2 gigabits.", "One clear dashboard for VLANs, firewall and VPN; the same family many IT companies install.", "No Wi-Fi built in; add an access point."],
      ["gw-fiber", "UniFi Cloud Gateway Fiber", 307, "Listed at $279 plus a surcharge of about 10% on the maker's store.", "10-gigabit ports and a PoE port; headroom for fast fibre.", "More than a 1-gigabit plan needs."],
      ["gw-opn", "OPNsense on a small PC", 220, "Free firewall software on a fanless box with several network ports.", "Teaches the most; closest to what enterprise firewalls feel like.", "More to set up and more ways to lock yourself out."],
      ["gw-keep", "Keep the current router", 0, "Use what the internet provider gave you.", "Free.", "Usually no VLANs or real firewall rules, so most of the network phase can't be done."]
    ] },
    { id: "switch", name: "Switch", what: "More wired ports. A managed switch understands VLANs; PoE powers access points and cameras over the network cable.", options: [
      ["sw-poe", "Managed 8-port switch with PoE", 110, "For example UniFi Lite 8 PoE.", "VLANs on every port; powers an access point.", ""],
      ["sw-none", "None for now", 0, "The gateway's own ports are enough to begin.", "", "Add one when you run out of ports."]
    ] },
    { id: "wifi", name: "Wi-Fi", what: "An access point that can broadcast separate networks for family, guests and smart-home gadgets.", options: [
      ["ap-keep", "Keep current Wi-Fi", 0, "Leave the existing router's Wi-Fi on for now.", "Free.", "Guest and gadget networks stay mixed with everything else."],
      ["ap-u7", "UniFi U7 Lite access point", 99, "Wi-Fi 7, powered from the switch.", "Each Wi-Fi name maps to its own VLAN.", "Needs a PoE port or injector."]
    ] },
    { id: "ups", name: "Battery backup (UPS)", what: "Keeps things running through a flicker and shuts the server down cleanly in an outage. Sudden power loss is how drives get corrupted.", options: [
      ["ups-1000", "1000–1500 VA UPS", 200, "APC or CyberPower, with a USB cable to the server or NAS.", "Minutes of runtime for a mini PC and NAS.", "A rack server drains it much faster."],
      ["ups-none", "None for now", 0, "", "", "Accept the risk for the first weeks only."]
    ] },
    { id: "offsite", name: "Off-site backup", what: "A copy of your files somewhere other than your house, encrypted before it leaves.", options: [
      ["off-usb", "External drive kept somewhere else", 250, "Swap it monthly; keep it at a relative's or in a locked drawer at work.", "One-time cost, no rented service.", "Only as fresh as your last swap."],
      ["off-cloud", "Encrypted cloud storage", 0, "Backblaze B2 or similar, roughly $6 per terabyte per month, not counted in the budget.", "Automatic and always current.", "A small monthly bill, though the provider only ever sees encrypted data."]
    ] },
    { id: "misc", name: "Odds and ends", what: "Network cables, a power strip, a shelf or wall mount, a domain name (about $12 a year).", options: [
      ["misc-kit", "Cables, mount and a domain", 75, "", "", ""],
      ["misc-none", "Already have them", 0, "", "", ""]
    ] }
  ],

  builds: [
    { id: "b-quiet", name: "Quiet build", note: "Recommended. Lives in the house, low power bill, files on their own box.", pick: ["srv-tiny", "ssd-none", "nas-ugreen", "hdd-2x8", "gw-max", "sw-poe", "ap-keep", "ups-1000", "off-cloud", "misc-kit"] },
    { id: "b-video", name: "The video's build", note: "One big used server and nothing else. Cheapest, loudest.", pick: ["srv-r640", "ssd-new", "nas-inside", "hdd-sas", "gw-keep", "sw-none", "ap-keep", "ups-none", "off-cloud", "misc-none"] },
    { id: "b-power", name: "Garage powerhouse", note: "The video's server plus proper networking and storage. Needs a garage or closet.", pick: ["srv-r640", "ssd-new", "nas-ugreen", "hdd-2x8", "gw-max", "sw-poe", "ap-u7", "ups-1000", "off-cloud", "misc-kit"] }
  ],

  /* step: [id, title, detail] */
  phases: [
    { id: "p0", name: "Plan", goal: "Know what you are building before spending anything.", steps: [
      ["p0-data", "Measure what you need to store", "Check how much is in Google Drive, Google Photos and on your phones. Double it for growth. That number picks your drive size."],
      ["p0-spot", "Pick where it will live", "It needs power, a wired network cable back to the router, airflow, and for a rack server a door between it and anywhere you sit."],
      ["p0-isp", "Check your internet connection", "Note your upload speed (it limits how fast files reach you when away). Ask your provider, or check the router's WAN address, to learn whether you are behind CGNAT. Either way this plan works, because nothing here needs an open port."],
      ["p0-build", "Choose a build in Parts and budget", "Start from one of the three builds and adjust. Leave a few hundred dollars unspent; something always comes up."],
      ["p0-pw", "Set up a password manager", "Every device here gets its own long random password. Bitwarden or 1Password is fine. Turn on two-step sign-in for it."]
    ] },
    { id: "p1", name: "Network foundation", goal: "A network split into zones, so one compromised gadget can't reach your files.", steps: [
      ["p1-map", "Draw the network you have today", "List every device, wired or Wi-Fi. This drawing becomes the document you keep updated, and it is the first thing an IT provider would ask for."],
      ["p1-gw", "Install the new gateway", "Put it behind the provider's modem. Change the admin password, turn on two-step sign-in for the account, and turn on automatic updates."],
      ["p1-vlan", "Create four networks (VLANs)", "Main for your laptops and phones, Servers for the homelab, IoT for TVs and smart-home gadgets, Guest for visitors. Give each its own address range, for example 10.0.10.x, 10.0.20.x, 10.0.30.x, 10.0.40.x."],
      ["p1-fw", "Write the firewall rules", "Start from “zones can't talk to each other”, then allow only what is needed: Main may reach Servers; IoT and Guest may reach the internet and nothing else. Test each rule by trying to break it."],
      ["p1-wifi", "Map Wi-Fi names to networks", "One Wi-Fi name per zone. Use WPA3 where devices support it. Move gadgets to IoT one at a time."],
      ["p1-dhcp", "Reserve addresses for servers", "Give the server, the NAS and the gateway fixed addresses and write them in your document."],
      ["p1-ups", "Plug in the battery backup", "Server, NAS, gateway and modem go on the battery side. Connect the USB cable so it can trigger a clean shutdown."]
    ] },
    { id: "p2", name: "Server", goal: "Proxmox running, locked down, with a first virtual machine.", steps: [
      ["p2-fw", "Update firmware before anything else", "On a used Dell: update the BIOS and the iDRAC remote-management controller, reset iDRAC to a new password, and put its port on the Servers network. Never let iDRAC face the internet."],
      ["p2-test", "Test used parts on arrival", "Run a memory test overnight and check each drive's health report (SMART). Return anything doubtful while you still can."],
      ["p2-pve", "Install Proxmox", "Write the installer to a USB stick, boot from it, and install onto the new SSD. You only need a screen and keyboard for this step."],
      ["p2-hard", "Lock down Proxmox", "Apply updates, create your own admin user instead of using root day to day, turn on two-step sign-in for the web page, and keep that page reachable from Main and Servers only."],
      ["p2-zfs", "Set up storage as a mirror", "If drives live in the server, use ZFS in mirror mode. On the Dell, switch the RAID controller to pass-through (HBA) mode first, because ZFS needs to see the drives directly."],
      ["p2-vm", "Create an apps machine", "One Linux virtual machine running Docker will host most services. Take a snapshot before every big change; rolling back takes seconds."],
      ["p2-bak", "Schedule Proxmox backups", "Nightly backups of every virtual machine to the NAS. This is what lets you experiment without fear."]
    ] },
    { id: "p3", name: "Your own “Google Drive”", goal: "Files and photos syncing to storage you own.", steps: [
      ["p3-pool", "Build the storage pool", "Two drives mirrored. Turn on scheduled snapshots (hourly kept for a day, daily kept for a month) so deleted or encrypted files can be rolled back."],
      ["p3-users", "Create accounts and shares", "A login each for you and Karly, a private folder each, and a shared one. No shared admin account."],
      ["p3-nc", "Install Nextcloud", "It gives you file sync, sharing links, calendars and phone apps. Run it on the apps machine with its data on the NAS. Nextcloud AIO is the easiest installer."],
      ["p3-photo", "Turn on phone photo upload", "Use the Nextcloud app, or Immich if you want a Google Photos-style timeline. Check a day later that new photos arrived."],
      ["p3-move", "Move your data across", "Export from Google with Takeout, copy it in, and spot-check folders. Keep the Google copy until backups have been tested."],
      ["p3-restore", "Prove you can get a file back", "Delete a test file, then restore it from a snapshot and from a backup. Storage is not finished until this works."]
    ] },
    { id: "p4", name: "Reach it from anywhere", goal: "Private access from your phone and laptop with no open ports.", steps: [
      ["p4-ts", "Install Tailscale", "Put it on the apps machine, your laptop and both phones. Devices on your private network can reach each other from anywhere; nobody else can see them."],
      ["p4-sub", "Advertise the Servers network", "One machine acting as a “subnet router” lets you reach the NAS and Proxmox without installing Tailscale on everything."],
      ["p4-acl", "Limit who can reach what", "In Tailscale's access rules, let your devices reach everything and Karly's reach only Nextcloud. Turn on two-step sign-in for the account you sign in with."],
      ["p4-test", "Test from mobile data", "Wi-Fi off, open Nextcloud and Proxmox. If it works, you never need port forwarding."],
      ["p4-noport", "Confirm nothing is forwarded", "Check the gateway's port-forwarding page is empty and UPnP is off."]
    ] },
    { id: "p5", name: "Host this website at home", goal: "The hub served from your own server.", steps: [
      ["p5-web", "Run a web server", "A Caddy container on the apps machine serving a copy of the PersonalWebsite repository."],
      ["p5-pull", "Update it from GitHub automatically", "A small scheduled job pulls the latest changes every few minutes, so the way we work stays the same: I push, your server picks it up."],
      ["p5-jobs", "Move the data jobs home", "The data scripts run on a schedule on your server instead of on GitHub's."],
      ["p5-domain", "Buy a domain name", "About $12 a year. It also gives you proper names and certificates for internal services."],
      ["p5-tunnel", "Publish through a tunnel", "Cloudflare Tunnel makes an outbound connection from your server, so visitors reach the site without your home address being exposed or any port being opened. Put the web server in its own zone so it can't reach your files."],
      ["p5-private", "Move the private corner home", "The page for the two of you can sit behind Tailscale instead of Netlify, with no password page on the public internet at all."],
      ["p5-fallback", "Keep GitHub Pages as the spare", "If the power is out, point the domain back at GitHub Pages. Write down how."]
    ] },
    { id: "p6", name: "Backups", goal: "Three copies, two kinds of storage, one outside the house.", steps: [
      ["p6-local", "Check the local copies", "Snapshots on the NAS, plus Proxmox backups of every machine. A mirror is not a backup: it copies your mistakes instantly."],
      ["p6-off", "Set up the off-site copy", "Encrypt before sending (restic, Kopia or the NAS's own tool). Keep the encryption key in the password manager and on paper."],
      ["p6-drill", "Run a restore drill", "Restore a folder from the off-site copy to a different machine. Put a reminder in the calendar to repeat it every three months."],
      ["p6-kit", "Write an emergency sheet", "What exists, where the keys are, and how Karly gets to the photos if you are not around. Keep it with the paper key."]
    ] },
    { id: "p7", name: "Harden and watch", goal: "Know when something breaks or looks wrong.", steps: [
      ["p7-upd", "Automate updates", "Security updates install on their own on every Linux machine; firmware and Proxmox get a monthly reminder."],
      ["p7-mon", "Add monitoring", "Uptime Kuma checks each service every minute and messages your phone when one goes down."],
      ["p7-health", "Turn on drive and battery alerts", "Email or phone alerts for failing drives, a full pool and the UPS running on battery."],
      ["p7-acct", "Review accounts", "No default passwords left, two-step sign-in everywhere that offers it, and separate admin and everyday logins."],
      ["p7-ids", "Try intrusion detection", "Turn on the gateway's threat detection and read what it flags for a week. This is a good topic to compare notes on with the IT company."],
      ["p7-doc", "Finish the documentation", "Network drawing, address table, what runs where, and how to rebuild it. Written for the you of two years from now."]
    ] },
    { id: "p8", name: "Next projects", goal: "Things to build once the base is solid.", steps: [
      ["p8-tank", "Give Tank Arena its own database", "A small database on your server replaces the outside service, so saved tanks are shared between players."],
      ["p8-dns", "Block ads for the whole house", "AdGuard Home or Pi-hole as the network's DNS server."],
      ["p8-vault", "Host your own password vault", "Vaultwarden, reachable only over Tailscale. Only after backups are proven."],
      ["p8-ha", "Home Assistant and cameras", "Smart-home control, with Frigate recording cameras to the NAS. Cameras belong on the IoT network."],
      ["p8-ai", "An AI agent, fenced in", "The video suggests letting an agent set everything up. Give it its own virtual machine on its own zone, with no path to your files or backups, and review what it does. An agent that can run commands on the box holding all your data is the riskiest thing on this list."]
    ] }
  ],

  /* concept: [id, name, plain meaning, where you will meet it, a question for the IT company] */
  concepts: [
    ["c-ip", "IP addresses and subnets", "Every device gets a number. A subnet is a block of those numbers, written like 10.0.20.0/24, meaning 254 usable addresses that can talk to each other directly.", "Choosing a range for each of your four networks.", "How is our address space divided, and is it documented anywhere?"],
    ["c-dhcp", "DHCP and reservations", "DHCP hands out addresses automatically. A reservation makes one device always get the same address.", "Fixing the address of your server and NAS.", "Which devices have fixed addresses, and where is that list kept?"],
    ["c-dns", "DNS", "The phone book that turns names into addresses. You can run your own for internal names, separate from the public one.", "Typing nas.home instead of a number; blocking ads network-wide.", "Who hosts our public DNS, and do we filter DNS for security?"],
    ["c-nat", "NAT, port forwarding and CGNAT", "Your whole house shares one public address; the router keeps track of who asked for what. Port forwarding pokes a hole inward. CGNAT means your provider shares an address among many customers, so holes are impossible.", "Deciding not to forward any ports at all.", "Which ports are open to the internet at work, and why is each one needed?"],
    ["c-vlan", "VLANs and trunks", "One physical network split into separate virtual ones. A trunk is a cable carrying several VLANs at once, each tagged with a number.", "Main, Servers, IoT and Guest on the same switch and access point.", "How is the office segmented? Are printers, phones and guests on their own VLANs?"],
    ["c-fw", "Firewall rules and zones", "Rules that say which traffic may pass between networks. Good practice is to block everything, then allow the few things you need. “Stateful” means replies to allowed requests get back in automatically.", "Stopping the smart TV from reaching your files.", "What is the default rule between our internal networks: allow or deny?"],
    ["c-vpn", "VPNs", "An encrypted path between networks. Site-to-site joins two offices; remote access joins one laptop to an office; mesh VPNs like Tailscale join individual devices directly. WireGuard is the modern protocol underneath many of them.", "Reaching home from your phone.", "How do remote staff connect, and is two-step sign-in required on the VPN?"],
    ["c-proxy", "Reverse proxies and certificates", "One front desk that receives every web request and passes it to the right app, adding the padlock (TLS certificate) so traffic is encrypted.", "Caddy in front of the website and Nextcloud.", "Who renews our certificates, and what happens when one expires?"],
    ["c-switch", "Switching, PoE and link speeds", "Switches connect wired devices. Managed ones understand VLANs. PoE sends power down the network cable. Links come in 1, 2.5 and 10 gigabit; SFP ports take plug-in modules for fibre or copper.", "Why the video's server came with 25-gigabit ports that a home router can't use.", "Where are our bottlenecks: the uplinks, the switches or the internet line?"],
    ["c-wifi", "Wi-Fi design", "Each Wi-Fi name can map to its own VLAN. WPA3 is the current security standard; a guest network should be isolated so visitors can't see each other or you.", "Separate names for family, gadgets and guests.", "Is guest Wi-Fi isolated from company devices, and how is the staff Wi-Fi password managed?"],
    ["c-virt", "Virtual machines and containers", "A virtual machine is a whole computer simulated in software. A container is lighter: one app boxed up with what it needs, sharing the host's core.", "Proxmox running an apps machine that runs Docker containers.", "What runs on our own servers versus in someone's cloud, and why was it split that way?"],
    ["c-raid", "RAID, snapshots and backups", "RAID (or a mirror) keeps you running when a drive dies. A snapshot is a frozen view you can roll back to. A backup is a separate copy somewhere else. You need all three; the rule of thumb is three copies, two kinds of storage, one off-site.", "Your NAS pool and the restore drill.", "When did we last test restoring from backup, and how long did it take?"],
    ["c-zt", "Least privilege and two-step sign-in", "Give each person and device only the access it needs, and require a second proof of identity. “Zero trust” means being on the office network alone earns you nothing.", "Separate admin logins; Karly's devices reaching only Nextcloud.", "Who has admin rights, and is two-step sign-in enforced for everyone?"],
    ["c-ids", "Monitoring, logs and intrusion detection", "Logs record what happened; monitoring tells you when something is down; intrusion detection (IDS/IPS) looks for traffic that resembles known attacks and can block it.", "Uptime Kuma and the gateway's threat detection.", "Who reads the alerts, and how fast would we know about a break-in?"]
  ],

  video: {
    agree: [
      "Used enterprise servers are the cheapest way to get a lot of memory and processor cores, especially while new memory is expensive.",
      "Proxmox is the right base, and Tailscale is the right way to reach it from outside.",
      "Buy the boot SSD new."
    ],
    watch: [
      "The noise and power draw are real costs. The $943 server can cost $200–300 a year to run and can't share a room with you.",
      "One hard drive means one failure loses everything. Mirror two, and keep a backup off-site; the video's build has neither.",
      "The video says to ignore the RAID controller. If you use ZFS, set it to pass-through mode instead, or ZFS can't check drive health.",
      "The network isn't covered at all. A server full of personal data on the same network as smart TVs is the main thing to fix, and it is also the part that teaches you what you want to learn.",
      "Letting an AI agent with full control set everything up is fast, but it means a program you don't fully control has the keys to all your data. Fence it in (see Next projects)."
    ]
  }
};
