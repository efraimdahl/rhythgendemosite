// Example ABC files (easy to extend this list)
var abcFiles = [`
L:1/8
Q:1/4=95
M:4/4
K:A
V:1 treble nm="Voice"
V:2 treble nm="Piano"
V:4 bass
V:5 bass
[V:1] "^td = 2" z8|[V:2]!mp! (C3 D/E/ DCB,A,|[V:4]!ped! [A,,,A,,]E,,C,D, E,F,D,E,!ped-up!|[V:5]x8|
[V:1] "^td = 2" z8|[V:2]E3 F/G/ FE D2|[V:4]!ped! G,E,A,E,!ped-up! G,E,F,E,|[V:5]x8|
[V:1] "^td = 2" z8|[V:2]C3 D/E/ DC B,>A,|[V:4]!ped! A,,,E,,C,D, E,F,D,E,!ped-up!|[V:5]x8|
[V:1] "^td = 2" z8|[V:2]E3 F/G/ FE D2)|[V:4]!ped! G,E,A,E,!ped-up! G,E,F,E,|[V:5]x8|
[V:1]"^td = 2"z2 A B c B A G|[V:2]!p! [E,C]E[CA][DB] [Ec][DB][CA][B,G]|[V:4]!ped! A,,,E,,C,E, A,E,A,E,!ped-up!|[V:5]x8|
[V:1]"^td = 2"A3 F G4|[V:2][A,CA]C^DF [B,EG]A,B,G|[V:4]!ped! E,,B,,A,^D,!ped-up! E,,B,,G,B,,|[V:5]x8|
[V:1]"^td = 2"z2 B c d c B A|[V:2][DB]B,[DB][Ec] [Fd][Ec][DB][CA]|[V:4]!ped! E,,B,,E,G, B,G,B,E,!ped-up!|[V:5]x8|
[V:1]"^td = 2"G3 E E4|[V:2][B,G]3 E E4|[V:4]!ped! E,,B,,E,G, B,2 z2!ped-up!|[V:5]x8|
[V:1]"^td = 6"E2 z E ^E2 E E|[V:2][A,E]4 [A,^E]4|[V:4][C,E,]4 [C,^E,]4|[V:5]x8|
[V:1]"^td = 6"F2 F2 G3 G|[V:2][A,F]4 [DEG]4|[V:4][D,F,]4 [B,,G,]4|[V:5]x8|
[V:1]"^td = 6"A4 ^A4|[V:2][EA]4 [E^A]4|[V:4][C,A,]4 [C,^A,]4|[V:5]x8|
[V:1]"^td = 6"B3 B d3 G|[V:2][DB]4 [^EB]4|[V:4][D,B,]4 [C,B,]4|[V:5]x8|
[V:1]"^td = 6"A3 G F2 c2|[V:2]A4 F4|[V:4][F,A,]4 [D,A,]4|[V:5]x8|
[V:1]"^td = 6"c8|[V:2]F4 ^E4|[V:4][C,G,]8|[V:5]x8|
[V:1]"^td = 6"F2 z2 z4|[V:2][A,F]4 [B,C^E]4|[V:4][F,,C,F,]4 [C,,C,]4|[V:5]x8|
[V:1]"^td = 6"!p! c3 c c c B A|[V:2][A,CF]CFG ACGF|[V:4]!ped! F,,C,F,A, CA,CA,!ped-up!|[V:5]x8|
[V:1]"^td = 2"G3 G G4|[V:2]^E^B,C^D EDC=B,|[V:4]!ped! C,,C,^E,F, G,F,E,C,!ped-up!|[V:5]x8|
[V:1]"^td = 2"z2 A2 A3/2 A/ B c|[V:2][A,F]A,CF ACFA|[V:4]!ped! F,,C,F,A, CA,CA,!ped-up!|[V:5]x8|
[V:1]"^td = 2"d3 d d4|[V:2]dFG^A BAGF|[V:4]!ped! F,,F,B,C DCB,F,!ped-up!|[V:5]x8|
[V:1]"^td = 2"z2 d d d d c B|[V:2]dDFc BAGF|[V:4]!ped! B,,F,B,C DCB,F,!ped-up!|[V:5]x8|
[V:1]"^td = 2"A3 A A4|[V:2]ACFG AGFC|[V:4]!ped! F,,C,F,G, A,G,F,C,!ped-up!|[V:5]x8|
[V:1]"^td = 2"z2 G2 G G A B|[V:2]^E^B,C^D ECDE|[V:4]!ped! C,,C,^E,F, G,F,E,C,!ped-up!|[V:5]x8|
[V:1]"^td = 2"c8|[V:2]FC^D^E FEFG|[V:4]!ped! F,,F,G,A, CB,A,G,!ped-up!|[V:5]x8|
[V:1]"^td = 2"!mf! e3 e e3 d|[V:2][A,CA]CEA cAEC|[V:4]!ped! [E,,E,]8!ped-up!|[V:5]x8|
[V:1]"^td = 2"c4 z2 z e|[V:2][A,CA]A,CE AECA,|[V:4]!ped! [A,,,A,,]8!ped-up!|[V:5]x8|
[V:1]"^td = 2"e3 e e3 d|[V:2][A,CA]A,CE AECA,|[V:4]!ped! [E,,E,]8!ped-up!|[V:5]x8|
[V:1]"^td = 2"c4 z2 z!mp! c|[V:2][A,CA]A,CE AECA,|[V:4]!ped! [A,,,A,,]8!ped-up!|[V:5]x8|
[V:1]"^td = 6""^dim." c3 B A2 G2|[V:2][CA]4 [B,G]4|[V:4]^D,4 =D,4|[V:5][F,,F,]4 [E,,E,]4|
[V:1]"^td = 6"!pp! A8|][V:2][CA]8|][V:4][A,,E,]8|][V:5]x8|]`,

	` 
L:1/8
Q:1/4=108
M:4/4
K:C
V:1 treble nm="Piano"
V:2 bass nm=""
[V:1]"^s=6"[Ac] [Ae]2 [Ad]- [Ad] [Ac]2 A|[V:2].[F,CF]2 .[E,B,D]2 [D,A,C]4|
[V:1]"^s=6"[Fd]/ [Fc]2 - [Fc]/ [FA]- [FA] F3|[V:2].[F,A,C]2 .[F,A,C]2 [D,F,A,]2 [D,F,A,]2|
[V:1]"^s=6"[Ec] [Ec]2 [DB]- [DB] [Fd]2 [Fd]|[V:2][E,,E,]2 [E,,E,]2 [E,,E,]2 [E,,E,]2|
[V:1]"^s=6"[Cc]4 z2 (3ABc|[V:2][A,,A,]2 [A,,A,]2 [G,,G,]2 [E,,E,]2|
[V:1]"^s=6"d/ f2- f/ d-  [^Fcd]4|[V:2][F,,F,]2 [F,,F,]2 [D,,D,]2 [D,,D,]2|
[V:1]"^s=6"[EGc]/ [EGc]- [EGc]/ [DGB]2- [DGB]4|[V:2][C,C]2 [C,C]2 [B,,B,]2 [B,,B,]2|
[V:1]"^s=6"[Ac] [Ae]2 [Ad]- [Ad] [Ac]2 [Ad]|[V:2][F,,F,]2 [F,,F,]2 [D,,D,]2 [D,,D,]2|
[V:1]"^s=6"[Ec]4 z z/ A/ B>A|[V:2][A,,A,]2 [A,,A,]2 [A,,A,]2 [A,,A,]2|
[V:1]"^s=2"ABcA efed|[V:2][A,,A,]2 [E,A,C]2 [A,,A,]2 [E,A,C]2|
[V:1]"^s=2"[^GBe]2 [GBe]2 [GBe]2 [EGBe]2|[V:2][E,,E,]2 [E,,E,]2 [^F,,^F,]2 [^G,,^G,]2|
[V:1]"^s=2"ABcA efed|[V:2][A,,A,]2 [E,A,C]2 [A,,A,]2 [E,A,C]2|
[V:1]"^s=2"[^GBe]2 [GBe]2 [GBe]2 [EGBe]2|[V:2][E,,E,]2 [E,,E,]2 [^F,,^F,]2 [^G,,^G,]2|
[V:1]"^s=2"ABcA efed|[V:2][A,,A,]2 [E,A,C]2 [A,,A,]2 [E,A,C]2|
[V:1]"^s=2"[^GBe]2 [GBe]2 [GBe]2 [EGBe]2|[V:2][E,,E,]2 [E,,E,]2 [^F,,^F,]2 [^G,,^G,]2|
[V:1]"^s=2" ABcA efed|[V:2][A,,A,]2 [E,A,C]2 [A,,A,]2 [E,A,C]2|
[V:1]"^s=2" [^GBe]2 [GBe]2 [GBe]2 [EGBe]2|[V:2][E,,E,]2 [E,,E,]2 [^F,,^F,]2 [^G,,^G,]2|
[V:1]"^s=6"z E[Ac]E z E[Ac]E|[V:2][A,,A,]4 [E,,E,]4|
[V:1]"^s=6"zEGEEA2x|[V:2][D,,D,]4 [E,,E,]4|[V:4]x7x|
[V:1]"^s=6"[Cc][Dd][_E_e][=E=e]- [Ee][Cc] [A,A]2|[V:2][A,,,A,,]2 [E,A,C]2 [E,,E,]2 [E,A,C]2|
[V:1]"^s=6"[Dd][^C^c][Dd][Ee]- [Ee][Cc] [A,A]2|[V:2][G,,,G,,]2 [E,G,C]2 [C,,C,]2 [E,G,C]2|
[V:1]"^s=6"[Gg][Aa][Gg][Ff]- [Ff][Dd] [B,B]2|[V:2][B,,,B,,]2 [F,G,B,]2 [G,,,G,,]2 [F,G,B,]2|
[V:1]"^s=6"[Cc][Dd][Cc][B,B]- [Cc][Dd] [Ee]2|[V:2][E,,E,]2 [E,G,]2 [G,,,G,,]2 [C,E,_B,]2|
[V:1]"^s=6"[A,A][B,B][Cc][A,A] [Dd][Cc][B,B][A,A]|[V:2][F,,,F,,]2 [F,A,]2 [^F,,^F,]2 [_E,,_E,]2|
[V:1]"^s=6"[Cc][Dd][Cc][A,A] [Dd][Cc][B,B][A,A]|[V:2][E,,E,]2 [E,A,C]2 [_E,,_E,]2 [E,^G,D]2|
[V:1]"^s=6"[Cc][Dd][Ee][Aa]- [Aa][Gg] [Ee]2|[V:2][E,,E,]2 [E,A,C]2 [^G,,^G,]2 [E,G,D]2|
`,
	`
X:1
%%score ( 1 2 ) ( 3 4 ) 
L:1/8
Q:1/4=160
M:4/4
K:C
V:1 treble nm="Piano"
V:2 treble
V:3 bass nm=""
[V:1] ^"s=1" z4 .[EG]2 .[EA]2|[V:2]x8|[V:3]C,2 G,2 .[G,C]2 .[G,C]2|
[V:1] ^"s=1" .[GB]2 .[GB]2 .[^FA]2 .[=FG]2|[V:2]x8|[V:3].[G,D]2 .[G,D]2 .[G,C]2 .[G,B,]2|
[V:1] ^"s=1" [Ec]2 .[Ec]2 .[Ge]2 .[Ec]2|[V:2]x8|[V:3][C,G,]4 z4|
[V:1] ^"s=1" [^Fcd]4 .d.B.c.A|[V:2]x8|[V:3]D,,2 D,2 .D,,2 z2|
[V:1]^"s=1".G2 .[db]2 .[c^f].[dg].[eg].[dg]|[V:2]x8|[V:3]G,,2 [G,B,F]2 [G,B,F]2 [G,B,F]2|
[V:1]^"s=1".[fb].[db] [df]2 z2 [Be]2|[V:2]x8|[V:3][D,,D,]2 [G,B,F]2 [G,,,G,,]2 [G,B,F]2|
[V:1]^"s=1"[Ec]4 .c.B.c.A|[V:2]x8|[V:3][C,,C,]2 [G,CE]2 z4|
[V:1]^"s=1"[^Fcd]4 .d.c.B.A|[V:2]x8|[V:3][D,,D,]2 [^F,CD]2 [D,,D,]2 z2|
[V:1]^"s=1".G2 .[db]2 .[^c^f].[dg].[eg].[dg]|[V:2]x8|[V:3][G,,,G,,]2 [G,B,F]2 [G,B,F]2 [G,B,F]2|
[V:1]^"s=1".[fb].[db] [df]2 z2 [Be]2|[V:2]x8|[V:3][D,,D,]2 [G,B,F]2 [G,,,G,,]2 [G,B,F]2|
[V:1]^"s=1"[Ec]4 .[Ec].[^FB].[Ec].[Ge]|[V:2]x8|[V:3][C,,C,]2 [G,CE]2 z4|
[V:1]^"s=1"[D^Fcd]4 .[Dd].[Dd].[Ee].[Ff]|[V:2]x8|[V:3][D,,,D,,]2 [D,^F,CD]2 z4|
[V:1]^"s=1".[Gg].[^G^g].[Aa].[_B_b] .[=B=b].[cc'].[dd'].[_e_e']|[V:2]x8|[V:3]z8|
[V:1]^"s=1".[ee'].[_e_e'].[=e=e'].[ff'] .[^f^f'].[gg'].[^g^g'].[aa']|[V:2]x8|[V:3]z8|
[V:1]^"s=1"[aa'][_b_b'][aa'][gg'] [^f^f'][gg'][ff'][dd']|[V:2]x8|[V:3]z8|
[V:1]^"s=1"[_e_e'][=e=e'][_e_e'][=e=e'] [Bb][cc'][Bb][Aa]|[V:2]x8|[V:3]z8|
[V:1]^"s=5"z2.[eg]2z2x2|[V:2](3:2:4z [^FA]2 z [d^f]2- [df]2 [GB][Ac]|[V:3][G,,,G,,]2 [G,B,F]2 [G,,,G,,]2 [G,B,F]2|
[V:1]^"s=5"[Bd]2 z2 .[ce]2 z2|[V:2](3:2:4z [DF]2 z [ce]2- [ce]2 [CE][D^F]|[V:3][C,,C,]2 [E,G,C]2 [G,,,G,,]2 [E,G,C]2|
[V:1]^"s=5"z2 .[E^G]2 z2 .[D=G]2|[V:2](3:2:4[EG] [EG]2 z [_EA]2- [EA]2 (3:2:2[FB] [^FA]2-|[V:3][E,,E,]2 [E,^G,D]2 [^F,,^F,]2 [F,CD]2|
[V:1]^"s=5"[FB]4 z4|[V:2](3:2:4[FA] [GB]2 z [A^c]2- [Ac]2 [Ac][Bd]|[V:3][G,,G,]2 [G,B,F]2 [D,,D,]2 [D,^F,C]2|
[V:1]^"s=5"z4 .[eg]2 z2|[V:2](3:2:4z [^FA]2 z [d^f]2- [df]2 [GB][Ac]|[V:3]G,,2 [G,B,F]2 [G,,G,]2 [G,B,F]2|
[V:1]^"s=5"[Bd]2 z2 .[ce]2 z2|[V:2](3:2:4z [DF]2 z [ce]2- [ce]2 [CE][D^F]|[V:3][C,,C,]2 [E,G,C]2 [G,,,G,,]2 [E,G,C]2|
[V:1]^"s=5"z2 .[_E^G]2 z2 .[=GB]2|[V:2](3:2:4[EG] [EG]2 z [_EA]2- [EA]2 (3:2:2[^FB] [=FA]2-|[V:3][E,,E,]2 [E,^G,D]2 [^F,,^F,]2 [F,CD]2|
[V:1]^"s=5"[FB]4 z4|[V:2](3:2:4[FA] [GB]2 z [A^c]2- [Ac]2 [Ac][Bd]|[V:3][G,,G,]2 [G,B,F]2 [D,,D,]2 [D,^F,C]2|
[V:1]^"s=5"z4 .[ca]2 z2|[V:2](3:2:4z [ca]2 z [ca]2- [ca]2 [Bg][ca]|[V:3]^F,2 [C^FA]2 A,2 [CFA]2|
[V:1]^"s=5" z4 .[Bg]2 z2|[V:2](3:2:4z [Bg]2 z [Bg]2- [Bg]2 [_B^f][=Bg]|[V:3]B,2           [B,DG]2 G,2 [B,DG]2|
[V:1]^"s=5" z4 .[A^f]2 z2|[V:2](3:2:4z [A^f]2 z [Af]2- [Af]2 [Ge][Af]|[V:3][D,,D,]2 [^F,CD]2 [D,,D,]2 [F,CD]2|
[V:1]^"s=5" [GBdg]4 z [Ff][Ee][_E_e]|[V:2]x8|[V:3][G,,G,]2 [G,B,DG]2 [D,,D,]2 [_E,,_E,]2|
[V:1]^"s=5" z4 .[^fa]2 z2|[V:2](3:2:4z [ca]2 z [ca]2- [ca]2 [Bg][ca]|[V:3][^F,,^F,]2 [C^FA]2 [A,,A,]2 [CFA]2|
[V:1]^"s=5" z4 .[Bg]2 z2|[V:2](3:2:4z [Bg]2 z [Bg]2- [Bg]2 [_B^f][=Bg]|[V:3]B,,2           [B,DG]2 G,2 [B,DG]2|
[V:1]^"s=5" z4 .[A^f]2 z2|[V:2](3:2:4z [A^f]2 z [Af]2- [Af]2 [Ge][Af]|[V:3][D,,D,]2 [^F,CD]2 [D,,D,]2 [F,CD]2|
[V:1]^"s=5" [GBdg]4 z [Bb][_B_b][Aa]|[V:2]x8|[V:3][G,,G,]2 [G,B,DG]2 [D,,D,]2 [_E,,_E,]2|
[V:1]^"s=5" z4 .[c'e']2 z2|[V:2](3:2:4z [^fa]2 z [fd']2- [fd']2 [db][ec']|[V:3]^F,,2 [D,^F,C]2 [D,,D,]2 [D,F,C]2|
[V:1]^"s=5" [Bg]2 z2 .[A^f]2 z2|[V:2](3:2:4z [Bg]2 z [Bg]2- [Bg]2 [_B^f][=Bg]|[V:3]B,,2 [B,DG]2 G,,2 [B,DG]2|
[V:1]^"s=5" z4 .[A^f]2 z2|[V:2](3:2:4z [A^f]2 z [Af]2- [Af]2 [Ge][Af]|[V:3][D,,D,]2 [^F,CD]2 [D,,D,]2 [D,F,CD]2|
[V:1]^"s=5" [GBdg]4 z [Bb][Aa][Gg]|[V:2]x8|[V:3][G,,G,]2 [G,B,DG]2 [D,,D,]2 [_E,,_E,]2|
[V:1]^"s=5" z4 .[ce]2 z2|[V:2](3:2:4z [^Fd]2 z [d^f]2- [df]2 [Bd][ce]|[V:3][^F,,^F,]2 [CD^F]2 [D,,D,]2 [D,F,C]2|
[V:1]^"s=5" z4 .[dg]2 z2|[V:2](3:2:4z [Bg]2 z [Bg]2- [Bg]2 [_B^f][=Bg]|[V:3]B,,2 [B,DG]2 G,,2 [B,DG]2|
`,
	`
L:1/8
Q:1/4=95
M:4/4
K:A
V:1 treble nm="Voice"
V:2 treble nm="Piano"
V:3 bass
V:4 bass
[V:1]"^td = 2" z8|[V:2]z8|[V:3](E,2 F,2 G,2 A,2)|[V:4]A,,4 B,,2 C,2|
[V:1]"^td = 2" z8|[V:2]d4 c2 B2|[V:3](A,2 B,2) C2 D2|[V:4]D,4 A,2 A,2|
[V:1]"^td = 2" z8|[V:2]e4 c2 B2|[V:3](E2 D2) (C2 D2)|[V:4](C2 B,2) A,2 D,2|
[V:1]"^td = 2" z8|[V:2]A4 G4|[V:3](C2 A,2) B,4|[V:4]E,4 E,4|
[V:1]"^td = 2" !mf! c4 B2 A2|[V:2]!p! E8|[V:3](A,2 G,2 F,2 E,2)|[V:4]A,,8|
[V:1]"^td = 2" d4 c2 B2|[V:2][EA]8|[V:3](B,2 A,2 G,2 F,2)|[V:4]A,,8|
[V:1]"^td = 2" e4 c2 B2|[V:2][EG]4 A2 FG|[V:3](E,2 D,2) C,2 B,,2|[V:4]A,,4 E,,4|
[V:1]"^td = 2" A4 G2 z2|[V:2][FA]4 [EG]2 z2|[V:3]E,2 ^D,2 =D,2 z2|[V:4]E,,6 x2|
[V:1]"^td = 6" c4 c4|[V:2]!p! [Ac]8|[V:3][K:treble] [FA]8|[V:4][K:treble] x8|
[V:1]"^td = 6" c4 c4|[V:2][Gc]8|[V:3][EG]8|[V:4]x8|
[V:1]"^td = 6" e4 ^d4|[V:2][ce]4 [^B^d]4|[V:3][^^F^A]4 [^FG]4|[V:4]x8|
[V:1]"^td = 6" c4 z4|[V:2]c8|[V:3](A4 ^E4)|[V:4]C8|
[V:1]"^td = 6" c4 c4|[V:2][Ac]8|[V:3][FA]8|[V:4]x8|
[V:1]"^td = 6" c4 c4|[V:2][Gc]8|[V:3][EG]8|[V:4]x8|
[V:1]"^td = 6" e4 ^d4|[V:2][ce]4 [^B^d]4|[V:3][^^F^A]4 [^FG]4|[V:4]x8|
[V:1]"^td = 6" c4 z4|[V:2]([Ec]4!<(! [C^E]4)!<)!|[V:3][K:bass] (A,2 G,2 A,2 B,2)|[V:4][K:bass] C,4 C,4|
[V:1]"^td = 2" c4 c2 c2|[V:2]!mp! (F4 G2 A2)|[V:3](A,2 C2 B,2 A,2)|[V:4]^D,8|
[V:1]"^td = 2" e4 B2 c2|[V:2]B4 G4|[V:3](G,2 B,2 A,2 G,2)|[V:4]E,8|
[V:1]"^td = 2" (^d2 c2) (B2 A2)|[V:2]A4 F4|[V:3]F,2 A,2 G,2 F,2|[V:4]B,,8|
[V:1]"^td = 2" G4 z4|[V:2][EG]4!<(! [B,E]4!<)!|[V:3]E,2 F,2 G,2 E,2|[V:4]E,4 E,4|
[V:1]"^td = 2" e4 d2 d2|[V:2][Be]4 d4|[V:3]G,2 A,2 B,2 G,2|[V:4]E,8|
[V:1]"^td = 2" c4 A4|[V:2][Ac]4 [EA]4|[V:3]A,2 E,2 F,2 G,2|[V:4]A,,4 C,4|
[V:1]"^td = 2" B4 c4|[V:2]B4 c4|[V:3]G,2 A,B, C2 B,2|[V:4]E,4 E,4|
[V:1]"^td = 2" A4 z4|[V:2][FA]4 z4|[V:3][D,D]4 z4|[V:4]x8|
[V:1]"^td = 2" e4 e4|[V:2][Be]8|[V:3][I:staff -1] [DG]8|[V:4]x8|
[V:1] "^td = 6" e4 e4|[V:2][Ae]8|[V:3][CE]8|[V:4]x8|
[V:1]"^td = 6" f4 e4|[V:2][Af]4 [Ge]4|[V:3][I:staff +1] [D,D]4 [E,D]4|[V:4]x8|
[V:1]"^td = 6" e8|[V:2][Ae]8|[V:3][I:staff -1] [CE]8|[V:4]x8|
[V:1]"^td = 6" c4 c4|[V:2][Ac]8|[V:3][I:staff +1] [F,A,]8|[V:4]x8|
[V:1]"^td = 6" c4 c4|[V:2][Gc]8|[V:3][E,G,]8|[V:4]x8|
[V:1]"^td = 6" e4 ^d4|[V:2][ce]4 [^B^d]4|[V:3][I:staff -1] [^^F^A]4 [^FG]4|[V:4]x8|
[V:1]"^td = 6" c4 z4|[V:2][Gc]8|[V:3](F4 ^E4)|[V:4]C8|
[V:1]"^td = 6" c4 c4|[V:2][Ac]8|[V:3][I:staff +1] [F,A,]8|[V:4]x8|
[V:1]"^td = 6" c4 c4|[V:2][Gc]8|[V:3][E,G,]8|[V:4]x8|
[V:1]"^td = 6" e4 ^d4|[V:2][ce]4 [^B^d]4|[V:3][I:staff -1] [^^F^A]4 [^FG]4|[V:4]x8|
[V:1]"^td = 6" c4 z4|[V:2]!<(! ([Gc]4 [^Ec]4)!<)!|[V:3][I:staff +1] (A,2 G,2 A,2 B,2)|[V:4]C,4 C,4|
[V:1]"^td = 6" c4 c2 c2|[V:2]!mp! (F4 G2 A2)|[V:3](A,2 C2 B,2 A,2)|[V:4]^D,8|
[V:1]"^td = 6" e4 B2 c2|[V:2]B4 G4|[V:3](G,2 B,2 A,2 G,2)|[V:4]E,8|
[V:1]"^td = 6" (^d2 c2) (B2 A2)|[V:2]A4 F4|[V:3]F,2 A,2 G,2 F,2|[V:4]B,,8|
[V:1]"^td = 6" G4 z4|][V:2][EG]4!<(! [B,E]4!<)!|][V:3]E,2 F,2 G,2 E,2|][V:4]E,4 E,4|]
`,
	`
L:1/8
Q:1/4=160
M:4/4
K:G
V:1 treble nm=""
[V:1][Ec]>A .[^DB]2 z2 [B,=DEG]>A|
[V:1][^CGB]>G [CEGB]2 z2 [B,EG]>A|
[V:1][A,CDFA]>^G [A,CDFA]>=G [A,CDF]>G [A,CD=G]>^G|
[V:1][CDFA]>^G (3:2:2[CDFA]2 [A,D=G]- [A,DG]2 z2|
[V:1]z z/ A/ _B>A [^CG]>A [CGB]>A|
[V:1]z z/ A/ [^Dc]>A [=Dc]>A [Dc]>A|
[V:1][B,EG]>E (3:2:2D [B,DEG]2- [B,DEG]4|
[V:1]z z/ [DGB]/- [DGB]>_B (3:2:2[^DA=B] [B,G]2- [B,G]2|
[V:1][Gc]>A .[^DB]2 z2 [B,=DEG]>A|
[V:1][^CGB]>G [CEGB]2 z2 [B,EG]>A|
[V:1][A,CDFA]>^G (3:2:2[A,CDFA] [A,CD=G]2- [A,CDG]2 (3:2:2[A,CD=G] [A,CDF]2-|
[V:1][A,CDF]>G (3:2:2[CDFA] [CDF^G]2- [CDFG]4|
`
	,
	`
L:1/8
Q:1/4=80
M:2/4
K:C
V:1 treble nm=""
[V:1](3:2:4[EG] [_E^F]2 z [Gc]2|
[V:1]z/ .[EG]3/2 z2|
[V:1][CE]/_E/=E/[CA]/- [CA]/G/[A,E]|
[V:1][A,_E]/[G,=E][F,D]/- [F,D]2|
[V:1]z .[DFG] z/ .A3/2|
[V:1](3z [G,CE]3 [G,CEA]2|
[V:1]z .[EG] z/ .[EG]3/2|
[V:1]z [B,DG]/[B,DF]/- [B,DF]2|
[V:1](3:2:4[EG] [_E^F]2 z [Gc]2|
[V:1]z/ .[EG]3/2 z2|
[V:1][CE]/_E/=E/[CA]/- [CA]/G/[A,E]|
[V:1][A,_E]/[G,=E][F,D]/- [F,D]2|
[V:1]z .[DFG] z/ .A3/2|
[V:1](3z [G,CE]3 [G,CEA]2|
[V:1]z .[EG] z/ .[EG]3/2|
[V:1]z [CEGc]/[CEGc]/- [CEGc]2|
[V:1](3[EG]/.[_E^F]3/2[EG]- [EG]2|
[V:1]z/ .[_E^F]3/2 z2|
[V:1][FB]/[FB]/[FB]/[FB]/- [FB]/[FB][FA]/|
[V:1][FG]/[FA][FA]/- [FA]/[FA][F^G]/|
[V:1](3[FA]/.[EG]3/2[Ec]- [Ec]2|
[V:1]z/ .[_EB]3/2 z2|
[V:1][DB]/[DB]/[CA]/[CA]/ [B,G]/[B,G]/[CA]/[CA]/|
[V:1](3[DB]/.[DB]3/2[DG]- [DG]2|
[V:1](3[EG]/.[_E^F]3/2[EG]- [EG]2|
[V:1]z/ .[_E^F]3/2 z2|
[V:1][FB]/[FB]/[FB]/[FB]/- [FB]/[FB][FA]/|
[V:1][FG]/[FA][FA]/- [FA]/[FA][F^G]/|
[V:1](3[FA]/.[EG]3/2[Ec]- [Ec]2|
[V:1]z/ .[_E_B]3/2 z2|
[V:1][DB]/[DB]/[CA]/[CA]/ [B,G]/[B,G]/[CA]/[CA]/|
[V:1](3[DB]/.[DB]3/2[DG]- [DG]2|
[V:1](3:2:4[EG]/.[_E^F]3/2[=EG]- [EG]2|
[V:1]z/ .[_E^F]3/2 z2|
[V:1][FB]/[FB]/[FB]/[FB]/- [FB]/[FB][FA]/|
[V:1][FG]/[FA][FA]/- [FA]/[FA][F^G]/|
[V:1](3[FA]/.[EG]3/2[Ec]- [Ec]2|
[V:1]z/ .[_E_B]3/2 z2|
[V:1][DB]/[DB]/[CA]/[CA]/ [B,G]/[B,G]/[CA]/[CA]/|
[V:1](3[DB]/.[DB]3/2[DG]- [DG]2|
[V:1](3[EG]/.[_E^F]3/2[EG]- [EG]2|
[V:1]z/ .[_E^F]3/2 z2|
[V:1][FB]/[FB]/[FB]/[FB]/- [FB]/[FB][FA]/|
[V:1][FG]/[FA][FA]/- [FA]/[FA][F^G]/|
[V:1](3[FA]/.[EG]3/2[Ec]- [Ec]2|
`,
	`L:1/8
Q:1/4=100
M:2/4
K:C
V:1 treble nm=""
[V:1]z2 z c/d/|
[V:1]ee/_e/ =ee/_e/|
[V:1]ec A2|
[V:1]AB/c/ BA|
[V:1]e4|
[V:1]ee/_e/ =ee/_e/|
[V:1]ec A2|
[V:1]de/f/ ed|
[V:1]A2 z2|
[V:1]ee/_e/ =ee/_e/|
[V:1]ec A2|
[V:1]cc/B/ cc/B/|
[V:1]cA E2|
[V:1]GG/A/ BG|
[V:1]A2 G2|
[V:1]GG/A/ BG|
[V:1]c4|`
	,

	`
L:1/8
Q:1/4=100
M:2/4
K:Eb
V:1 treble nm=""
[V:1]z2 z B|
[V:1]e/d/e/f/ eB|
[V:1]c/=B/c/d/ cG|
[V:1]A/G/A/B/ AF|
[V:1]G3 B|
[V:1]e/d/e/f/ eB|
[V:1]c/=B/c/d/ cG|
[V:1]A/G/A/B/ AF|
[V:1]G3 G|
[V:1]A/G/A/B/ Ac|
[V:1]B/=A/B/c/ Be|
[V:1](3d/f3/2d cB|
[V:1]e3 B|
[V:1]e/d/e/f/ eB|
[V:1]c/=B/c/d/ cG|
[V:1]A/G/A/B/ AF|
[V:1]G3 B|
[V:1]e/d/e/f/ eB|
[V:1]c/=B/c/d/ cG|
[V:1]A/G/A/B/ AF|
[V:1]G3 G|`,

	`X:1
L:1/8
Q:1/4=184
M:4/4
K:C
V:1 treble nm=""
[V:1]z4 z2 ef|
[V:1]g2 g2 g2 a2|
[V:1]g2 e2 e2 f2|
[V:1]g2 g2 ^g2 a2|
[V:1]g6 ga|
[V:1]g2 ga g2 ga|
[V:1]g2 ga g2 ga|
[V:1]g2 ag f2 e2|
[V:1]g4 d4|
[V:1]g6 z2|
[V:1]g3 a gecA|
[V:1]BcdB- B2 A^G|
[V:1]ABcA- A2 A^G|
[V:1]ABcA- A2 ^G2|
[V:1]G2 AB- B2 A2|
[V:1]G2 AB- B2 A2|
[V:1]G2 AB e2 d2|
[V:1]c4 c'2 z2|`,

];

// Cursor control class
function CursorControl(paperId) {
	var self = this;
	self.onStart = function () {
		var svg = document.querySelector(`#${paperId} svg`);
		var cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
		cursor.setAttribute("class", "abcjs-cursor");
		cursor.setAttributeNS(null, 'x1', 0);
		cursor.setAttributeNS(null, 'y1', 0);
		cursor.setAttributeNS(null, 'x2', 0);
		cursor.setAttributeNS(null, 'y2', 0);
		svg.appendChild(cursor);
	};
	self.onEvent = function (ev) {
		var lastSelection = document.querySelectorAll(`#${paperId} svg .highlight`);
		for (var k = 0; k < lastSelection.length; k++)
			lastSelection[k].classList.remove("highlight");

		for (var i = 0; i < ev.elements.length; i++) {
			var note = ev.elements[i];
			for (var j = 0; j < note.length; j++) {
				note[j].classList.add("highlight");
			}
		}

		var cursor = document.querySelector(`#${paperId} svg .abcjs-cursor`);
		if (cursor) {
			cursor.setAttribute("x1", ev.left - 2);
			cursor.setAttribute("x2", ev.left - 2);
			cursor.setAttribute("y1", ev.top);
			cursor.setAttribute("y2", ev.top + ev.height);
		}
	};
	self.onFinished = function () {
		var els = document.querySelectorAll(`#${paperId} svg .highlight`);
		for (var i = 0; i < els.length; i++)
			els[i].classList.remove("highlight");

		var cursor = document.querySelector(`#${paperId} svg .abcjs-cursor`);
		if (cursor) {
			cursor.setAttribute("x1", 0);
			cursor.setAttribute("x2", 0);
			cursor.setAttribute("y1", 0);
			cursor.setAttribute("y2", 0);
		}
	};
}
// Load all ABC files (fixed download flow: init -> prime -> download)
// Convert an AudioBuffer to a WAV Blob
function audioBufferToWavBlob(audioBuffer) {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;

  let result;
  if (numChannels === 2) {
    result = interleave(audioBuffer.getChannelData(0), audioBuffer.getChannelData(1));
  } else {
    result = audioBuffer.getChannelData(0);
  }

  const buffer = new ArrayBuffer(44 + result.length * 2);
  const view = new DataView(buffer);

  // RIFF header
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + result.length * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * bitDepth / 8, true);
  view.setUint16(32, numChannels * bitDepth / 8, true);
  view.setUint16(34, bitDepth, true);

  // data
  writeString(view, 36, "data");
  view.setUint32(40, result.length * 2, true);

  floatTo16BitPCM(view, 44, result);

  return new Blob([view], { type: "audio/wav" });

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  function floatTo16BitPCM(view, offset, input) {
    for (let i = 0; i < input.length; i++, offset += 2) {
      let s = Math.max(-1, Math.min(1, input[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
  }

  function interleave(left, right) {
    const length = left.length + right.length;
    const result = new Float32Array(length);
    let index = 0, inputIndex = 0;
    while (index < length) {
      result[index++] = left[inputIndex];
      result[index++] = right[inputIndex];
      inputIndex++;
    }
    return result;
  }
}

// Download helper
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
}

// Main load function
function load() {
  if (!ABCJS.synth.supportsAudio()) {
    document.querySelector("#main-container").innerHTML =
      "<div class='audio-error'>Audio is not supported in this browser.</div>";
    return;
  }

  abcFiles.forEach((abc, index) => {
    const paperId = `paper${index}`;
    const audioId = `audio${index}`;
    const downloadId = `download${index}`;

    const btn = document.getElementById(downloadId);
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Preparing...";
    }

    const cursorControl = new CursorControl(paperId);
    const synthControl = new ABCJS.synth.SynthController();
    synthControl.load(`#${audioId}`, cursorControl, {
      displayLoop: true,
      displayRestart: true,
      displayPlay: true,
      displayProgress: true,
      displayWarp: true
    });

    const visualObj = ABCJS.renderAbc(paperId, abc, {
      add_classes: true,
      responsive: "resize",
      wrap: { minSpacing: 0.5, maxSpacing: 0.5, preferredMeasuresPerLine: 5 },
      staffwidth: 900
    })[0];

    const midiBuffer = new ABCJS.synth.CreateSynth();

    midiBuffer
      .init({ visualObj })
      .then(() => midiBuffer.prime())
      .then(() => synthControl.setTune(visualObj, false))
      .then(() => {
        console.log(`Audio for tune ${index} ready.`);
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Download WAV";
          btn.addEventListener("click", async () => {
            try {
              btn.disabled = true;
              btn.textContent = "Downloading...";
              const audioBuffer = midiBuffer.getAudioBuffer();
              const wavBlob = audioBufferToWavBlob(audioBuffer);
              triggerDownload(wavBlob, `RhythGenDemoAudio${index}.wav`);
              console.log(`Downloading audio for tune ${index}`);
            } catch (err) {
              console.error("Download failed for tune " + index, err);
            } finally {
              // restore state
              btn.disabled = false;
              btn.textContent = "Download WAV";
            }
          });
        }
      })
      .catch((err) => {
        console.warn("Audio init/prime failed for tune " + index, err);
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Unavailable";
        }
      });
  });
}

