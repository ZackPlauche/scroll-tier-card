

const tiers = [
    {
        title: 'Basic Subscription',
        level: 1,
        monthlyRate: 20,
        annualRate: 199,
        features: [
            'Single Membership to Peer Network (online platform)',
            'Individual Competency Assessment',
            'Benchmark Reports',
            'Member Pricing for CPE Certified Events (approx. 12 CPEs per year)',
        ]
    },
    {
        title: 'Full Subscription',
        level: 2,
        monthlyRate: 125,
        annualRate: 1500,
        features: [
            'Leadership Assessment with Role/Title Benchmark',
            'LMS access for up to 3 team Members',
            'Benchmarking Diagnostic Tools',
            'SME led online Q&A - Office Hours',
            '1-hour Linkedin profile/bio/resume consultation',
            'AchieveNEXT will provide a recommendation to serve on boards (partner of The Boardlist)',
        ]
    },
    {
        title: 'Performance Cohorts',
        level: 3,
        monthlyRate: 500,
        annualRate: 6000,
        features: [
            'Group Coaching',
            'Meet every 6 weeks',
            'Private online discussion group', 
            'Personalized Assessment reports',
            'One-time 1-1 session with an executive coach',
            'Quarterly tabletop exercises from leading technical and industry experts',
            'Complimentary access to AchieveNEXT\'s annual conference'
        ]
    }
]


const ScrollCard = {
    template: /*html*/
        `<div class="scroll-card">
            <slot>
                <div class="scroll-card-title">{{ tier.title }}</div>
                <div class="scroll-card-price" style="margin-bottom: 10px;">\${{ price }}<span class="scroll-card-subscription-model-abbreviation">/{{ subscriptionModelAbbr }}</span></div>
                <div class="scroll-card-features">
                    <ul class="scroll-card-features-list">
                        <li v-if="tier.level > 1" style="list-style: none; font-weight: bold; margin-bottom: 10px;">Everything from the previous tier, plus...</li>
                        <li v-for="feature in tier.features" class="scroll-card-feature">{{ feature }}</li>
                    </ul>
                </div>
                <a class="scroll-card-subscribe-button" href="#">Subscribe</a>
            </slot>
        </div>`,
    props: {
        tier: Object,
        subscriptionModel: String,
    },
    computed: {
        price() { 
            if (this.subscriptionModel === 'Monthly') { return this.tier.monthlyRate }
            else if (this.subscriptionModel === 'Annually') { return this.tier.annualRate}
        },
        subscriptionModelAbbr() {
            if (this.subscriptionModel === 'Monthly') { return 'mo' } 
            else if (this.subscriptionModel == 'Annually') { return 'yr' }
        },
    },
}


const App = {
    template: /*html*/
        ``,
    components: {
        ScrollCard,
    },
    setup() { return { tiers } },
    data() {
        return {
            currentLevel: 0,
            subscriptionModel: 'Monthly',
        }
    },
    methods: {
        range: n => Array.from(Array(n).keys())
    }
    
}

const app = Vue.createApp(App)

app.mount('.scroll-card-container')