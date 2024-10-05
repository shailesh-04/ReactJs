import './Game.css';
function Game(){
  return (
   <form id="myForm">
		<main>
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
    	<input type="reset"  value="Reset"/>
		</div>
	</form>
  );
}
export default Game;