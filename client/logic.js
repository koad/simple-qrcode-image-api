import { Template } from 'meteor/templating';

Router.route('/', function () {
  this.render('welcome');
});

Router.route('/:_qrcode_content', function () { 
  this.render('app');
});

Template.app.helpers({
  url() {
    if(!Router.current().params._qrcode_content) return false;
    return Router.current().params._qrcode_content;
  },
  size() {
    let h = document.documentElement.clientHeight-104;
    let w = document.documentElement.clientWidth-96;
    if (h > w) h = w; // if the window is longer than it is wide then return this value now


    if(h < 128) h = 128; // Make sure the QR code at least this big

    let span = (w - h) / 2;  // create some padding to the left hand side of the QR code to center it


  h = h - 80;
    // Since the element we want to adjust
    // Meteor.setTimeout(()=>{ document.getElementById("codeBox").style.paddingLeft = span+"px" }, 3);
    return h
  },
});
