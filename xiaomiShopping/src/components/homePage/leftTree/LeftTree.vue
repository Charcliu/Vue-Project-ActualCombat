<template>
    <div class = "leftTree">
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'leftTree',
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .leftTree > div{
        height: 460px;
        width: 234px;
        background: rgba(0,0,0,0.6);
    }
    .leftTree{
        position: absolute;
        left: 0px;
        top: 0px;
    }
</style>
