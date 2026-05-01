// Extensive cybersecurity attack dataset (2015-2024)
// Sources: Public breach databases, CVE/NVD, news reports, security advisories

const attacksData = [
    {
        id: 1,
        year: 2024,
        title: "UnitedHealth Group Ransomware Attack",
        industry: "healthcare",
        type: "ransomware",
        organization: "UnitedHealth Group (Change Healthcare)",
        region: "North America",
        impact: "Critical",
        riskScore: 9.8,
        cvssScore: 9.8,
        peopleAffected: 150000000,
        financialLoss: 1.5, // in billions
        dataBreached: "6TB patient records",
        attackVector: "Phishing → Credential theft → Lateral movement → Ransomware deployment",
        threatActor: "ALPHV/BlackCat (Ransomware-as-a-Service)",
        description: "ALPHV/BlackCat ransomware group attacked Change Healthcare, disrupting pharmacy services across the US. The attack encrypted systems and stole sensitive patient data including medical records, insurance information, and personal identifiers.",
        rootCauses: [
            "Compromised credentials via sophisticated phishing campaign",
            "Lack of multi-factor authentication on critical systems",
            "Inadequate network segmentation between billing and clinical systems",
            "Slow patch management processes (90+ days for critical patches)",
            "Insufficient endpoint detection and response capabilities"
        ],
        consequences: [
            "Pharmacy claims processing halted nationwide for 2 weeks",
            "Patient data theft including 150M medical records",
            "$1.5+ billion in recovery and remediation costs",
            "Regulatory investigations by HHS, FTC, and state attorneys",
            "Class-action lawsuits from affected patients and providers",
            "Increased insurance premiums across healthcare sector"
        ],
        mitigation: [
            "Implement zero-trust architecture with micro-segmentation",
            "Enforce MFA for all remote access and privileged accounts",
            "Regular security awareness training with phishing simulations",
            "Maintain offline, air-gapped backups tested monthly",
            "Implement network segmentation separating clinical, billing, and administrative systems",
            "Deploy endpoint detection and response (EDR) with 24/7 monitoring",
            "Establish incident response team with healthcare sector expertise"
        ],
        lessons: "Healthcare organizations are prime targets due to critical nature of services and sensitive data. Ransomware groups increasingly target supply chain vulnerabilities in healthcare IT systems.",
        resources: [
            "CISA Alert AA24-060A: ALPHV/BlackCat Ransomware",
            "HHS Healthcare Sector Cybersecurity Guide",
            "NIST Healthcare Cybersecurity Framework",
            "HIPAA Security Rule Compliance Checklist",
            "HHS 405(d) Health Industry Cybersecurity Practices"
        ],
        compliance: ["HIPAA", "HITECH", "GDPR", "CCPA"],
        ioc: ["ALPHV decryptor tool", "BlackCat ransomware signature", "Command and control domains"],
        detection: "Monitor for unusual file encryption patterns, abnormal network traffic to known ransomware IPs"
    },
    {
        id: 2,
        year: 2023,
        title: "MOVEit Transfer Zero-Day Exploit",
        industry: "technology",
        type: "zero-day",
        organization: "Multiple organizations worldwide",
        impact: "Severe",
        peopleAffected: 60000000,
        financialLoss: 10, // in billions
        description: "Cl0p ransomware group exploited zero-day vulnerability in MOVEit Transfer file transfer software, affecting thousands of organizations globally including government agencies, banks, and universities.",
        rootCauses: [
            "SQL injection vulnerability (CVE-2023-34362)",
            "Lack of input validation",
            "Delayed patch deployment",
            "Overprivileged service accounts"
        ],
        consequences: [
            "Massive data exfiltration from multiple sectors",
            "Extortion demands from ransomware group",
            "Regulatory fines for data protection violations",
            "Reputational damage across affected organizations"
        ],
        mitigation: [
            "Implement robust vulnerability management program",
            "Regular third-party software security assessments",
            "Network segmentation for file transfer systems",
            "Monitor for unusual data transfer patterns",
            "Develop incident response playbooks for supply chain attacks"
        ],
        lessons: "Supply chain attacks can have cascading effects across multiple industries. Third-party software vulnerabilities require coordinated response.",
        resources: [
            "CISA Alert AA23-158A: MOVEit Transfer Vulnerability",
            "MITRE ATT&CK: Supply Chain Compromise",
            "OWASP Top 10: A06:2021-Vulnerable Components"
        ]
    },
    {
        id: 3,
        year: 2022,
        title: "LastPass Data Breach",
        industry: "technology",
        type: "data-breach",
        organization: "LastPass",
        impact: "High",
        peopleAffected: 33000000,
        financialLoss: 0.5, // in billions
        description: "Attackers compromised a developer account and stole source code, technical information, and customer vault data from LastPass password manager.",
        rootCauses: [
            "Compromised developer endpoint",
            "Inadequate access controls",
            "Failure to detect lateral movement",
            "Insufficient encryption of backup data"
        ],
        consequences: [
            "Encrypted password vaults stolen",
            "Customer trust severely damaged",
            "Multiple class-action lawsuits",
            "Increased credential stuffing attacks on users"
        ],
        mitigation: [
            "Implement privileged access management (PAM)",
            "Regular security audits of developer environments",
            "Encrypt sensitive data at rest and in transit",
            "Monitor for unusual data access patterns",
            "Conduct regular red team exercises"
        ],
        lessons: "Password managers are high-value targets. Defense-in-depth is critical for protecting sensitive customer data.",
        resources: [
            "NIST Special Publication 800-63B: Digital Identity Guidelines",
            "CISA Zero Trust Maturity Model",
            "OWASP Application Security Verification Standard"
        ]
    },
    {
        id: 4,
        year: 2021,
        title: "Colonial Pipeline Ransomware Attack",
        industry: "energy",
        type: "ransomware",
        organization: "Colonial Pipeline Company",
        impact: "Critical",
        peopleAffected: 50000000,
        financialLoss: 4.4, // in billions
        description: "DarkSide ransomware group attacked Colonial Pipeline's billing system, forcing shutdown of largest fuel pipeline in US causing fuel shortages across East Coast.",
        rootCauses: [
            "Compromised VPN account without MFA",
            "Legacy systems with known vulnerabilities",
            "Inadequate network segmentation",
            "Lack of incident response preparedness"
        ],
        consequences: [
            "Fuel pipeline shutdown for 6 days",
            "Gasoline shortages and price spikes",
            "$4.4 million ransom paid (partially recovered)",
            "National security concerns highlighted"
        ],
        mitigation: [
            "Implement MFA for all remote access",
            "Segment OT (Operational Technology) from IT networks",
            "Develop and test incident response plans",
            "Regular backup of critical systems",
            "Threat intelligence sharing with industry partners"
        ],
        lessons: "Critical infrastructure is vulnerable to ransomware. OT/IT convergence requires specialized security controls.",
        resources: [
            "CISA Pipeline Security Guidelines",
            "NIST Cybersecurity Framework for Critical Infrastructure",
            "DOE Energy Sector Cybersecurity Framework"
        ]
    },
    {
        id: 5,
        year: 2020,
        title: "SolarWinds Supply Chain Attack",
        industry: "government",
        type: "supply-chain",
        organization: "Multiple US Government Agencies",
        impact: "Severe",
        peopleAffected: 18000,
        financialLoss: 18, // in billions
        description: "Russian APT29 (Cozy Bear) compromised SolarWinds Orion software update mechanism, enabling backdoor access to thousands of organizations including US government agencies.",
        rootCauses: [
            "Compromised build environment",
            "Weak code signing practices",
            "Insufficient software supply chain security",
            "Lack of code integrity verification"
        ],
        consequences: [
            "Nation-state espionage across government and private sector",
            "Massive data exfiltration from multiple agencies",
            "Erosion of trust in software supply chain",
            "Costly incident response and remediation"
        ],
        mitigation: [
            "Implement software bill of materials (SBOM)",
            "Secure software development lifecycle (SSDLC)",
            "Code signing with hardware security modules",
            "Supply chain risk assessments",
            "Threat modeling for critical software components"
        ],
        lessons: "Software supply chain attacks can bypass traditional security controls. Trust but verify all software updates.",
        resources: [
            "CISA Software Supply Chain Security Guide",
            "NTIA Software Bill of Materials (SBOM)",
            "NIST SP 800-161: Supply Chain Risk Management"
        ]
    },
    {
        id: 6,
        year: 2023,
        title: "MGM Resorts Social Engineering Attack",
        industry: "retail",
        type: "phishing",
        organization: "MGM Resorts International",
        impact: "High",
        peopleAffected: 10000000,
        financialLoss: 0.1, // in billions
        description: "Scattered Spider group used social engineering to trick help desk into resetting credentials, leading to system-wide compromise of MGM's operations.",
        rootCauses: [
            "Inadequate help desk verification procedures",
            "Lack of security awareness training",
            "Overprivileged administrative accounts",
            "Poor incident detection capabilities"
        ],
        consequences: [
            "Casino operations disrupted for 10 days",
            "Slot machines and reservation systems offline",
            "Customer data potentially compromised",
            "$100+ million in lost revenue"
        ],
        mitigation: [
            "Implement strict help desk verification protocols",
            "Regular social engineering awareness training",
            "Least privilege principle for administrative access",
            "Multi-factor authentication for all privileged accounts",
            "24/7 security operations center monitoring"
        ],
        lessons: "Human factors remain critical vulnerability. Social engineering can bypass technical controls.",
        resources: [
            "CISA Social Engineering Awareness Guide",
            "NIST SP 800-53: Security Awareness Training",
            "SANS Security Awareness Resources"
        ]
    },
    {
        id: 7,
        year: 2022,
        title: "Twitter Data Breach via Insider Threat",
        industry: "technology",
        type: "data-breach",
        organization: "Twitter (now X)",
        impact: "Moderate",
        peopleAffected: 5300000,
        financialLoss: 0.15, // in billions
        description: "Insider sold Twitter user data to third parties, exposing email addresses and phone numbers of millions of users through API vulnerability exploitation.",
        rootCauses: [
            "Inadequate API security controls",
            "Poor insider threat detection",
            "Lack of data loss prevention",
            "Insufficient access logging"
        ],
        consequences: [
            "User privacy violated at scale",
            "Regulatory investigations and potential fines",
            "Reputational damage",
            "Increased phishing risk for affected users"
        ],
        mitigation: [
            "Implement robust API security controls",
            "User and entity behavior analytics (UEBA)",
            "Data loss prevention solutions",
            "Comprehensive access logging and monitoring",
            "Regular security audits of data access patterns"
        ],
        lessons: "Insider threats require specialized detection controls. API security is critical for data protection.",
        resources: [
            "OWASP API Security Top 10",
            "NIST SP 800-53: Insider Threat Controls",
            "CISA Insider Threat Mitigation Guide"
        ]
    },
    {
        id: 8,
        year: 2021,
        title: "JBS Foods Ransomware Attack",
        industry: "retail",
        type: "ransomware",
        organization: "JBS Foods",
        impact: "High",
        peopleAffected: 850000,
        financialLoss: 11, // in millions
        description: "REvil ransomware group attacked JBS Foods, world's largest meat processor, disrupting operations across US, Canada, and Australia.",
        rootCauses: [
            "Compromised remote desktop protocol (RDP)",
            "Lack of network segmentation",
            "Inadequate endpoint protection",
            "Delayed security patch deployment"
        ],
        consequences: [
            "Meat processing plants shut down",
            "Food supply chain disruption",
            "$11 million ransom paid",
            "Increased meat prices"
        ],
        mitigation: [
            "Secure remote access solutions",
            "Network segmentation for critical operations",
            "Advanced endpoint detection and response",
            "Regular vulnerability scanning and patching",
            "Business continuity planning for critical infrastructure"
        ],
        lessons: "Food supply chain is critical infrastructure. Ransomware groups target essential services for maximum leverage.",
        resources: [
            "FDA Food Defense Guidelines",
            "USDA Cybersecurity Resources",
            "FSIS Security Best Practices"
        ]
    }
];

// Mitigation strategies database
const mitigationStrategies = [
    {
        id: 1,
        category: "ransomware",
        title: "Ransomware Defense Strategy",
        description: "Comprehensive approach to prevent, detect, and respond to ransomware attacks.",
        keyActions: [
            "Maintain regular, tested backups offline",
            "Implement network segmentation",
            "Use endpoint detection and response (EDR)",
            "Enable multi-factor authentication everywhere",
            "Conduct regular security awareness training"
        ],
        resources: [
            "CISA Ransomware Guide",
            "No More Ransom Project",
            "NIST Ransomware Risk Management"
        ]
    },
    {
        id: 2,
        category: "phishing",
        title: "Phishing Defense Framework",
        description: "Multi-layered approach to combat social engineering and email-based attacks.",
        keyActions: [
            "Implement email authentication (DMARC, DKIM, SPF)",
            "Use advanced email security gateways",
            "Conduct regular phishing simulations",
            "Enable browser isolation for suspicious links",
            "Implement URL filtering and reputation services"
        ],
        resources: [
            "CISA Phishing Guidance",
            "Anti-Phishing Working Group",
            "Google Safe Browsing"
        ]
    },
    {
        id: 3,
        category: "data-breach",
        title: "Data Protection Strategy",
        description: "Protect sensitive data through encryption, access controls, and monitoring.",
        keyActions: [
            "Implement data classification",
            "Use encryption for data at rest and in transit",
            "Apply least privilege access principles",
            "Deploy data loss prevention (DLP) solutions",
            "Monitor for unusual data access patterns"
        ],
        resources: [
            "NIST SP 800-53: Security Controls",
            "GDPR Data Protection Guidelines",
            "PCI DSS Data Security Standard"
        ]
    },
    {
        id: 4,
        category: "supply-chain",
        title: "Supply Chain Security",
        description: "Secure software and hardware supply chains against compromise.",
        keyActions: [
            "Implement software bill of materials (SBOM)",
            "Conduct third-party risk assessments",
            "Verify code integrity with digital signatures",
            "Monitor for supply chain threats",
            "Develop incident response for supply chain attacks"
        ],
        resources: [
            "NTIA Software Supply Chain Security",
            "CISA Software Supply Chain Guide",
            "NIST SP 800-161: Supply Chain Risk Management"
        ]
    },
    {
        id: 5,
        category: "zero-day",
        title: "Zero-Day Vulnerability Management",
        description: "Prepare for and respond to unknown vulnerabilities.",
        keyActions: [
            "Implement application whitelisting",
            "Use exploit mitigation technologies",
            "Maintain threat intelligence feeds",
            "Develop rapid patch deployment processes",
            "Conduct regular vulnerability assessments"
        ],
        resources: [
            "CISA Known Exploited Vulnerabilities Catalog",
            "MITRE CVE Database",
            "NVD Vulnerability Database"
        ]
    },
    {
        id: 6,
        category: "ddos",
        title: "DDoS Mitigation Strategy",
        description: "Protect against distributed denial of service attacks.",
        keyActions: [
            "Implement DDoS protection services",
            "Use content delivery networks (CDNs)",
            "Configure rate limiting and filtering",
            "Maintain excess bandwidth capacity",
            "Develop DDoS response playbooks"
        ],
        resources: [
            "CISA DDoS Guidance",
            "Cloudflare DDoS Protection",
            "AWS Shield DDoS Protection"
        ]
    }
];