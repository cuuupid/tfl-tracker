var express = require('express')
app = express()
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

app.get('/:line/:station', (q, s) => {
    let r = new XMLHttpRequest();
    let url = 'http://cloud.tfl.gov.uk/TrackerNet/PredictionDetailed/'
    url = url + q.params['line'] + '/' + q.params['station']
    r.open('GET', url, false)
    r.send()
    s.header('Access-Control-Allow-Origin', '*')
    s.header('Access-Control-Allow-Credentials', true)
    s.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    s.header('Access-Control-Allow-Headers', 'Content-Type')
    s.header('Content-Type','text/xml')
    s.send(r.responseText)
})

app.listen(8080)