### Introduction

Latches are basic storage elements that operate with signal levels (rather than signal transitions). Latches controlled by a clock transition are flip-flops. Latches are edge-sensitive devices. Latches are useful for the design of the asynchronous sequential circuit.<br><br>

SR (Set-Reset) Latch – SR Latch is a circuit with:<br><br>
(i) 2 cross-coupled NOR gates or 2 cross-coupled NAND gates.<br>
(ii) 2 inputs S for SET and R for RESET.<br>
(iii) 2 outputs Q, <span style="text-decoration: overline;">Q</span>.
<br><br>
The SR Latch using NOR gate is shown below with its truth table:<br><br><br><br>
<center><img src="images/l.png"  width="300" height="200"> <br><b> Figure-1:Logic Symbol of NOR gate latch</b><br>
<img src="images/ll.png"  width="250" height="200"><br><b> Figure-2:Truth Table of NOR gate latch</b></p> <br></center>
<br><br><br>

While the R and S inputs are both low, feedback maintains the Q and <span style="text-decoration: overline;">Q</span> outputs in a constant state, with <span style="text-decoration: overline;">Q</span> the complement of Q. If S (Set) is pulsed high while R (Reset) is held low, then the Q output is forced high, and stays high when S returns to low; similarly, if R is pulsed high while S is held low, then the Q output is forced low, and stays low when R returns to low.The R = S = 1 combination is called a restricted combination or a forbidden state because, as both NOR gates then output zeros, it breaks the logical equation Q = <span style="text-decoration: overline;">Q</span>. The combination is also inappropriate in circuits where both inputs may go low simultaneously (i.e. a transition from restricted to keep). The output would lock at either 1 or 0 depending on the propagation time relations between the gates (a race condition).<br><br>
<center><img src="images/aa.gif"  width="400" height="300"> <br>
       
<b>Figure-3:Timing Diagram of NOR gate latch</b></center><br>

