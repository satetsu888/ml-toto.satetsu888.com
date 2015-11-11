<template>
第{{round}}回toto予想
<table>
    <tbody>
        <tr class="caption">
            <td>No.</td>
            <td>Cards</td>
            <td>予想</td>
        </tr>
        <tr class="body" v-for="(index, match) in matches">
            <td>{{index}}</td>
            <td>{{match.cards}}</td>
            <td>{{match.prediction}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
module.exports = {
    props: function(){
        return {
            "round": "",
            "matches": []
        };
    },
    ready: function() {
        this.$set('round', "802");
        this.$http.get('./result/0802.json', function (data, status, request) {
            this.$set('matches', data);
        })
    }
}
</script>

<style lang="stylus">
table
    width 100%
</style>
