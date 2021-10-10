var coinFlip;
do{
    coinFlip = Math.round(Math.random());
    if(coinFlip==0)
    {
        window.console.log("Heads" );
        Res="Heads";
    }
    else {
        window.console.log("Tails" );
        Res="Tails";
    }
}while(Res!="Tails")