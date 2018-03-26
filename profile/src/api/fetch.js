import Vue from 'vue'
var getRawData = async (url) => {
    let data = await Vue.http.get(url)
    return data
}

export default getRawData