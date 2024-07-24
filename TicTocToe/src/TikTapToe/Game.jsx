import { useState } from "react";
import './Game.css';
function Game(){
  var box = [];
  for(let i=1; i<=9; i++)
      box.push(
         <div className="box">
            <input type="radio" id={`inpt${i}`} name={`inpt${i}`} value="- " onChange={(e) =>
            Check(e)}/>
				<label htmlFor={`inpt${i}`} className="label"></label>
         </div>
      );
      
  var bool = true;
  function Check(e){
    const play = document.querySelectorAll("span");
    if(bool){
      e.target.parentNode.children[1].innerHTML = "x";
      play[0].style.border="none";
		  play[1].style.border="2px solid pink";
      bool = false;
      Match('x');
    }
    else{
      e.target.parentNode.children[1].innerHTML = "o";
      play[1].style.border="none";
		  play[0].style.border="2px solid blue";
      bool=true;
      Match('o');
    }
    console.log(e.target.value);
  }
  const winNun= [[0,1,2],[3,4,5]];
  function Match(ox){
    let win=0;
    const lbl = document.querySelectorAll(".label");
    for(let i=0; i<3; i++){
      for(let j=0; i<2; j++){
        if(lbl[winNun[0][i]].innerHTML == ox)
          win++;
      }
    }
    if(win==2){
      alert("Plear "+ ox +" is Winner");
    }
  }
  return (
   <form id="myForm">
		<main>
			{box}
		</main>
		<div className="info">	
		                      	<div className="WinTime">
		                      		<div className="X">
		                      			<span>X</span>
		                      			<p>Plear k1 [X]</p>
		                      			<h2 id="X_Num">0</h2>
		                      		</div>
		                      		<div className="O">
		                      			<span>O</span>
		                      			<p>Plear 2 [O]</p>
		                      			<h2 id="O_Num">0</h2>
		                      		
		                      		</div>
		                      	</div>
		                      	<hr/>
		                      	<input type="reset" onClick="ScoreReset()" value="Reset"/>
		</div>
	</form>
  );
}
export default Game;