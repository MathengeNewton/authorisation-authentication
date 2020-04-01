<template>
    <div>
        <img src="../assets/logo.png" id="myavatar">
    </div>
</template>
<script>
export default {
    name: "avatar",
    props:{
        img: String
    }
}
</script>
<style scoped>
#myavatar{
    width: 30%;
    border: 4px solid rgb(245, 8, 8,0.4);
    border-radius: 50%;
}
</style>