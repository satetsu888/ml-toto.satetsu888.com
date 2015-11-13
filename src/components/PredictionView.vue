<template>
<h2 v-if="$loadingRouteData">Loading ...</h2>
<h2 v-if="!$loadingRouteData">第{{round}}回toto予想</h2>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ml-toto -->
<ins class="adsbygoogle"
     style="display:inline-block;width:320px;height:100px"
     data-ad-client="ca-pub-5556257550558549"
     data-ad-slot="1012272705"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<table>
    <tbody>
        <tr class="caption">
            <td>No.</td>
            <td>Cards</td>
            <td>予想</td>
        </tr>
        <tr class="body" v-for="(index, match) in matches" v-cloak>
            <td>{{index + 1}}</td>
            <td>{{match.cards}}</td>
            <td>{{match.prediction}}</td>
        </tr>
    </tbody>
</table>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ml-toto -->
<ins class="adsbygoogle"
     style="display:inline-block;width:320px;height:100px"
     data-ad-client="ca-pub-5556257550558549"
     data-ad-slot="1012272705"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<a v-link="{path: '/'}">TOPへ</a>
</template>

<script>
module.exports = {
    data: function(){
        return {
            round: "",
            matches:[] 
        };
    },
    ready: function() {
        this.$http.get('./result/meta.json', function (data, status, request) {
            this.$set('round', data.lastround);
            this.$http.get('./result/'+data.lastround+'.json', function (data, status, request) {
                this.$set('matches', data);
            })
        });
    }
}
</script>

<style lang="stylus">
[v-cloak]
    display none
table
    width 100%
</style>
