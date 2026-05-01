# Cybersecurity Attack Timeline

An interactive timeline showcasing major cyber attacks from 2020-2024 with detailed analysis and mitigation guidance.

## Features

- **Interactive Timeline**: Year-wise visualization of major cyber attacks
- **Detailed Analysis**: Root causes, consequences, and impact analysis for each attack
- **Mitigation Guidance**: What should have been done to prevent each attack
- **Industry Filtering**: Filter attacks by industry (Healthcare, Finance, Government, Technology, Energy, Retail)
- **Attack Type Filtering**: Filter by attack type (Ransomware, Phishing, DDoS, Data Breach, Supply Chain, Zero-Day)
- **Statistics Dashboard**: Real-time statistics on attacks, impact, and financial loss
- **Mitigation Strategies**: Comprehensive security strategies for different attack types
- **Responsive Design**: Works on desktop and mobile devices

## Live Demo

Visit: [https://somil149.github.io/attack-timeline/](https://somil149.github.io/attack-timeline/)

## Data Sources

All data is curated from public sources:
- **CVE/NVD Databases**: Common Vulnerabilities and Exposures
- **Public Breach Databases**: Have I Been Pwned, BreachAlarm
- **News Reports**: Major cybersecurity incidents coverage
- **Government Reports**: CISA, FBI, NSA advisories
- **Industry Analysis**: Security research reports

**No API keys required** - all data is self-contained.

## Included Attacks (2020-2024)

1. **2024**: UnitedHealth Group Ransomware Attack (Healthcare)
2. **2023**: MOVEit Transfer Zero-Day Exploit (Technology)
3. **2023**: MGM Resorts Social Engineering Attack (Retail)
4. **2022**: LastPass Data Breach (Technology)
5. **2022**: Twitter Data Breach via Insider Threat (Technology)
6. **2021**: Colonial Pipeline Ransomware Attack (Energy)
7. **2021**: JBS Foods Ransomware Attack (Retail)
8. **2020**: SolarWinds Supply Chain Attack (Government)

## Mitigation Strategies Included

- Ransomware Defense Strategy
- Phishing Defense Framework
- Data Protection Strategy
- Supply Chain Security
- Zero-Day Vulnerability Management
- DDoS Mitigation Strategy

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome for icons
- GitHub Pages for hosting
- No frameworks or build tools required

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/somil149/attack-timeline.git
   ```

2. Open `index.html` in your browser

No dependencies or build process required!

## Project Structure

```
attack-timeline/
├── index.html          # Main HTML file
├── style.css          # CSS styles
├── script.js          # JavaScript logic
├── data.js            # Curated attack dataset
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## Adding New Attacks

To add new attacks, edit `data.js`:

```javascript
{
    id: 9,
    year: 2024,
    title: "New Attack Name",
    industry: "industry",
    type: "attack-type",
    organization: "Organization Name",
    impact: "Impact Level",
    peopleAffected: 1000000,
    financialLoss: 1.5, // in billions
    description: "Attack description...",
    rootCauses: ["Cause 1", "Cause 2"],
    consequences: ["Consequence 1", "Consequence 2"],
    mitigation: ["Mitigation 1", "Mitigation 2"],
    lessons: "Key lessons learned...",
    resources: ["Resource 1", "Resource 2"]
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new attacks or improvements
4. Submit a pull request

## License

MIT License - see LICENSE file

## Author

Somil - [GitHub Profile](https://github.com/somil149)

## Purpose

This project aims to:
- Raise cybersecurity awareness through real-world examples
- Provide practical mitigation guidance
- Help organizations learn from past security incidents
- Promote security best practices across industries