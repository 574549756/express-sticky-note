require('less/index.less')

var Event = require('../mod/event.js')
var WaterFall = require('../mod/waterfall.js')
var NoteManager = require('../mod/note-manager.js').NoteManager

NoteManager.load()

$('.add-note').on('click', function() {
    NoteManager.add()
})

Event.on('waterfall', function() {
    WaterFall.init($('#content'))
})
