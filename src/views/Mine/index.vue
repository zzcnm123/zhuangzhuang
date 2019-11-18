<template>
    <div id="main">
        <Header title="你的壮壮"></Header>
            <div id="content">
                <h3>Login</h3>
            </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login'
export default{
    name:'Mine',
    components:{
        Header,
        TabBar,
        Login
    }
}
</script>


<style>

</style>