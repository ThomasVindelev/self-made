const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');
const app = express();

require('dotenv').config({ path: 'variables.env' });

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true,
});


app.use(cors());

app.post('/upload', (req, res) => {
    let percent = 0;
    const interval = setInterval(() => {
        percent += 5;
        pusher.trigger('upload', 'progress', {
            percent,
        });

        if (percent == 100) clearInterval(interval);
    }, 100);
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.use('/home', (_, res) => {
    res.send({
        response: 'API is running'
    })
});

app.post('/test', (_, res) => {
    console.log('Kaldet gik igennem')
    res.send({
        response: 'API is running'
    })
})

app.use('/login', (_, res) => {
    res.send({
        token: 'test1234'
    })
});