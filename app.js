function transposeUp() {
    let chords = Array('A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'G', 'G#', 'A');
    let inp_chord1 = document.getElementById("chord1").value;
    let inp_chord2 = document.getElementById("chord2").value;
    let inp_chord3 = document.getElementById("chord3").value;
    let inp_chord4 = document.getElementById("chord4").value;
    let inp_chord5 = document.getElementById("chord5").value;
    let index1 = chords.indexOf(inp_chord1)
    let index2 = chords.indexOf(inp_chord2)
    let index3 = chords.indexOf(inp_chord3)
    let index4 = chords.indexOf(inp_chord4)
    let index5 = chords.indexOf(inp_chord5)

    document.getElementById("chord1").value = chords[(index1 + 1) % (chords.length)]
    document.getElementById("chord2").value = chords[(index2 + 1) % (chords.length)]
    document.getElementById("chord3").value = chords[(index3 + 1) % (chords.length)]
    document.getElementById("chord4").value = chords[(index4 + 1) % (chords.length)]
    document.getElementById("chord5").value = chords[(index5 + 1) % (chords.length)]

}
