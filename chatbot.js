function isEnter(e)
{
    if(e.keyCode==13)
    {
        respond();
    }
}
function respond()
{
    var user_text= document.getElementById('usertext').value;
    var reply=bot.replyAsync("local-user",user_text,this,function(error,reply){botReply(user_text,reply);});
    document.getElementById('usertext').value="";
}
function botReply(user_text,reply)
{
   var res=document.getElementById('botchat');
   res.innerHTML+= '<b> You : </b>'+ user_text +'<br>';
   res.innerHTML+= '<b> Bot : </b>'+ reply +'<br>';
}
var bot=new RiveScript();

bot.loadFile(["bot/begin.rive","bot/replys.rive"],ifLoads,ifNot); 

function ifLoads(batchNum) 
{
    console.log("Batch #" + batchNum + " has finished loading!");
    bot.sortReplies();
}
    
function ifNot(error)
{
    console.log("Error when loading files: " + error);
}
  