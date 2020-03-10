var synth = new Tone.FMSynth().toMaster()
let notesAndKeys = [
    {'c3':65},
    {'c#3': 87},
    {'d3':83},
    {'d#3':69},
    {'e3':68},
    {'f3':70},
    {'f#3':84},
    {'g3':71},
    {'g#3':89},
    {'a3':72},
    {'a#3':85},
    {'b3':74},
    {'c4':75},
    {'c#4':79},
    {'d4':76}
];

$("div").click(function(event) {
let note = $(this).attr('id');
synth.triggerAttackRelease(note, '8n')
console.log($(this).attr('id'));
event.stopPropagation();
});

$(document).on('keydown',function(e) {
  notesAndKeys.forEach(function(hash){
    var keys = Object.keys(hash)
    var value = hash[keys[0]]
    console.log(keys[0],value);

     if(e.which == value) {
        synth.triggerAttackRelease(keys[0],'8n');
    }
  });
});
