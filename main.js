
let range = n => Array.from(Array(n).keys())

const levels = [
    {
        title: 'Basic Subscription',
        level: 1,
        monthlyRate: 20,
        annualRate: 199,
        features: [
            'Single Membership to Peer Network (online platform)',
            'Individual Competency Assessment',
            'Benchmark Reports',
            'Member Pricing tfor CPE Certified Events (approx. 12 CPEs per year)',
        ]
    },
    {
        title: 'Full Subscription',
        level: 2,
        monthlyRate: 125,
        annualRate: 1500,
        features: [
            'Leadership Assessment iwth Role/Title Benchmark',
            'LMS access for up to 3 team Members',
            'Benchmarking Diagnostic Tools',
            'SME Led Online Q&A',
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
            'One-time 1-1 session with an executive coach.',
            'Quarterly tabletop exercises from leading technical and industry experts',
            'Complimentary access to AchieveNEXT\'s annual conference.'
        ]
    }
]

const ScrollCard = {
    setup() {
        return { levels }
    },
    data() {
        return {
            level: 1,
            subscriptionModel: 'Monthly',
        }
    },
    computed: {
        currentLevel() { return this.levels[this.level - 1] },
        subscriptionModelAbbr() {
            if (this.subscriptionModel === 'Monthly') {
                return 'mo'
            } else if (this.subscriptionModel == 'Anually') {
                return 'yr'
            }
        },
        title() { return this.currentLevel.title },
        price() {
            if (this.subscriptionModel === 'Monthly') {
                return this.currentLevel.monthlyRate
            } else if (this.subscriptionModel === 'Anually') {
                return this.currentLevel.annualRate
            }
        },
        features() {
            let featureList = []
            range(this.level).forEach(function (i) {
                this.levels[i].features.forEach(feature => featureList.push(feature))
            }, this)
            return featureList
        }
    },

}


const app = Vue.createApp(ScrollCard).mount('.scroll-card-container')
