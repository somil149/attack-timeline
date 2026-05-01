// Main application logic
let selectedAttackId = null;
let filteredAttacks = [];

// Use enhanced dataset
const attacksData = attacksDataEnhanced;

// DOM elements
const yearFilter = document.getElementById('year-filter');
const industryFilter = document.getElementById('industry-filter');
const attackTypeFilter = document.getElementById('attack-type-filter');
const resetFiltersBtn = document.getElementById('reset-filters');
const timelineEl = document.getElementById('timeline');
const attackDetailsEl = document.getElementById('attack-details');
const mitigationGridEl = document.getElementById('mitigation-grid');
const insightsListEl = document.getElementById('insights-list');

// Stats elements
const totalAttacksEl = document.getElementById('total-attacks');
const industriesAffectedEl = document.getElementById('industries-affected');
const peopleImpactedEl = document.getElementById('people-impacted');
const financialLossEl = document.getElementById('financial-loss');

// Navigation elements
const navOverview = document.getElementById('nav-overview');
const navTimeline = document.getElementById('nav-timeline');
const navMitigation = document.getElementById('nav-mitigation');
const navInsights = document.getElementById('nav-insights');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
    updateStats();
    loadMitigationStrategies();
    generateInsights();
});

// Load and filter data
function loadData() {
    // Apply filters
    const year = yearFilter.value;
    const industry = industryFilter.value;
    const attackType = attackTypeFilter.value;
    
    filteredAttacks = attacksData.filter(attack => {
        const yearMatch = year === 'all' || attack.year.toString() === year;
        const industryMatch = industry === 'all' || attack.industry === industry;
        const typeMatch = attackType === 'all' || attack.type === attackType;
        
        return yearMatch && industryMatch && typeMatch;
    });
    
    renderTimeline();
    updateStats();
    
    // If an attack was selected but filtered out, clear selection
    if (selectedAttackId && !filteredAttacks.find(a => a.id === selectedAttackId)) {
        selectedAttackId = null;
        clearAttackDetails();
    }
}

// Render timeline
function renderTimeline() {
    timelineEl.innerHTML = '';
    
    if (filteredAttacks.length === 0) {
        timelineEl.innerHTML = '<div class="empty-state"><p>No attacks match the selected filters</p></div>';
        return;
    }
    
    // Group by year
    const attacksByYear = {};
    filteredAttacks.forEach(attack => {
        if (!attacksByYear[attack.year]) {
            attacksByYear[attack.year] = [];
        }
        attacksByYear[attack.year].push(attack);
    });
    
    // Sort years descending
    const years = Object.keys(attacksByYear).sort((a, b) => b - a);
    
    years.forEach(year => {
        const yearAttacks = attacksByYear[year];
        
        yearAttacks.forEach(attack => {
            const attackEl = document.createElement('div');
            attackEl.className = `timeline-item ${selectedAttackId === attack.id ? 'selected' : ''}`;
            attackEl.dataset.id = attack.id;
            
            attackEl.innerHTML = `
                <div class="timeline-year">${attack.year}</div>
                <div class="timeline-title">${attack.title}</div>
                <div class="timeline-details">
                    <span><i class="fas fa-industry"></i> ${attack.industry}</span>
                    <span><i class="fas fa-bug"></i> ${attack.type}</span>
                    <span><i class="fas fa-users"></i> ${formatNumber(attack.peopleAffected)} affected</span>
                </div>
            `;
            
            attackEl.addEventListener('click', () => selectAttack(attack.id));
            timelineEl.appendChild(attackEl);
        });
    });
}

// Select attack and show details
function selectAttack(id) {
    selectedAttackId = id;
    const attack = attacksData.find(a => a.id === id);
    
    if (!attack) return;
    
    // Update timeline selection
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.remove('selected');
        if (parseInt(item.dataset.id) === id) {
            item.classList.add('selected');
        }
    });
    
    // Show attack details
    attackDetailsEl.innerHTML = `
        <div class="attack-details-content">
            <div class="attack-header">
                <div>
                    <h2 class="attack-title">${attack.title}</h2>
                    <div class="attack-meta">
                        <span class="meta-item"><i class="fas fa-calendar"></i> ${attack.year}</span>
                        <span class="meta-item"><i class="fas fa-industry"></i> ${attack.industry}</span>
                        <span class="meta-item"><i class="fas fa-bug"></i> ${attack.type}</span>
                        <span class="meta-item"><i class="fas fa-building"></i> ${attack.organization}</span>
                    </div>
                </div>
                <div class="impact-badge">${attack.impact} Impact</div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-file-alt"></i> Description</h3>
                <p>${attack.description}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-search"></i> Root Causes</h3>
                <ul>
                    ${attack.rootCauses.map(cause => `<li>${cause}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Consequences</h3>
                <ul>
                    ${attack.consequences.map(consequence => `<li>${consequence}</li>`).join('')}
                </ul>
                <p><strong>People Affected:</strong> ${formatNumber(attack.peopleAffected)}</p>
                <p><strong>Financial Loss:</strong> $${attack.financialLoss}${attack.financialLoss >= 1 ? ' billion' : ' million'}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-shield-alt"></i> Mitigation Strategies</h3>
                <p>What should have been done to prevent or mitigate this attack:</p>
                <ul>
                    ${attack.mitigation.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-graduation-cap"></i> Lessons Learned</h3>
                <p>${attack.lessons}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-book"></i> Resources</h3>
                <ul>
                    ${attack.resources.map(resource => `<li>${resource}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Clear attack details
function clearAttackDetails() {
    attackDetailsEl.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-mouse-pointer"></i>
            <p>Select an attack from the timeline to view details</p>
        </div>
    `;
}

// Update statistics
function updateStats() {
    const totalAttacks = filteredAttacks.length;
    const industries = [...new Set(filteredAttacks.map(a => a.industry))];
    const totalPeople = filteredAttacks.reduce((sum, attack) => sum + attack.peopleAffected, 0);
    const totalLoss = filteredAttacks.reduce((sum, attack) => sum + attack.financialLoss, 0);
    
    totalAttacksEl.textContent = totalAttacks;
    industriesAffectedEl.textContent = industries.length;
    peopleImpactedEl.textContent = formatNumber(totalPeople);
    financialLossEl.textContent = `$${totalLoss.toFixed(1)}B`;
}

// Load mitigation strategies
function loadMitigationStrategies() {
    mitigationGridEl.innerHTML = '';
    
    mitigationStrategies.forEach(strategy => {
        const card = document.createElement('div');
        card.className = 'mitigation-card';
        
        card.innerHTML = `
            <h3><i class="fas fa-shield-alt"></i> ${strategy.title}</h3>
            <p>${strategy.description}</p>
            <h4>Key Actions:</h4>
            <ul>
                ${strategy.keyActions.map(action => `<li>${action}</li>`).join('')}
            </ul>
            <h4>Resources:</h4>
            <ul>
                ${strategy.resources.map(resource => `<li>${resource}</li>`).join('')}
            </ul>
        `;
        
        mitigationGridEl.appendChild(card);
    });
}

// Generate insights
function generateInsights() {
    const insights = [
        "Ransomware attacks increased 150% from 2020-2024, targeting critical infrastructure",
        "Supply chain attacks affect multiple organizations simultaneously through shared software",
        "Social engineering remains top initial attack vector, bypassing technical controls",
        "Average time to detect a breach is 207 days - continuous monitoring is critical",
        "Zero-day vulnerabilities are increasingly exploited before patches are available",
        "Insider threats account for 30% of data breaches - monitor internal access patterns"
    ];
    
    insightsListEl.innerHTML = '';
    insights.forEach(insight => {
        const insightEl = document.createElement('div');
        insightEl.className = 'insight';
        insightEl.textContent = insight;
        insightsListEl.appendChild(insightEl);
    });
}

// Setup event listeners
function setupEventListeners() {
    yearFilter.addEventListener('change', loadData);
    industryFilter.addEventListener('change', loadData);
    attackTypeFilter.addEventListener('change', loadData);
    
    resetFiltersBtn.addEventListener('click', () => {
        yearFilter.value = 'all';
        industryFilter.value = 'all';
        attackTypeFilter.value = 'all';
        loadData();
        updateStats();
    });
}

// Helper functions
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Initial load
loadData();