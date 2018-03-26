import getRawData from '../../api/fetch.js'
const state = {
    isLoading : true,
    skills: []
}
const getters = {
    getLoading: (state) => state.isLoading,
    getSkills: (state) => state.skills
}
const actions = {
    fetchData: async ({commit, state}) =>{
        let data = await getRawData("https://us-central1-pwa-profile.cloudfunctions.net/skills");
        data.body.forEach(item => {
            commit('push', {val:item , name:"skills"})
        })
        commit('change', {val : false, name: "isLoading"})
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