<template>
    <div class = "notFound">
        <div class = "text">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
        data () {
            return {
                msg: 'Not Found Page'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .notFound{
        position: fixed;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
    }
    .text{
        position: absolute;
        height: 60px;
        top: 50%;
        left: 50%;
        margin-top: -30px;
        margin-left: -200px;
        font-size: 40px;
        width: 400px;
        text-align: center;
    }
</style>
