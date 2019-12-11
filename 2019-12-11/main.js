$(function(){
    var list = $('.list');
    $('#btn').on('click',function(){
    var msg = $('#msg').val();
        $.ajax({
            url:'https://api.github.com/users/'+msg,
            methods: 'get',
            data:msg,
            success:function(res){
                list.text(JSON.stringify(res))
                console.log(res.login)
            }
        })
    })
})