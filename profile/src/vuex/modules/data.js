import getRawData from '../../api/fetch.js'
import works from '../../assets/JSON/works'
const state = {
    isLoading : true,
    skills: [],
    works: [],
    count: 0
}
const getters = {
    getLoading: (state) => state.isLoading,
    getSkills: (state) => state.skills,
    getWorks: (state) => state.works,
    getCount: (dtate) => state.count,
    getWorkItem: (state) => {
        return index => state.works[index]
    }
}
const actions = {
    fetchData: async ({commit, state}) =>{
        let data = await getRawData("https://us-central1-pwa-profile.cloudfunctions.net/skills");
        commit('change', {val : works, name: "works"})
        data.body.forEach(item => {
            commit('push', {val:item , name:"skills"})
        })
        commit('change', {val : false, name: "isLoading"})
        commit('change', {val : state.works.length, name: "count"})
    }
}
const mutations = {
    push:(state, data)=>{
        state[data.name].push(data.val)
    },
    change:(state, data)=>{
        state[data.name] = data.val
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}