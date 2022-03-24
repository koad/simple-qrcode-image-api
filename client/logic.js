import { Template } from 'meteor/templating';

var span = 0;

Template.app.helpers({
  url() {
    return location.pathname.substr(1);
  },

  // this is likely shit, TODO: find a way to make this better
  size() {
    let h = document.documentElement.clientHeight-104;
    let w = document.documentElement.clientWidth-96;
    if (h > w) return w; // if the window is longer than it is wide then return this value now
    if(h < 128) h = 128; // Make sure the QR code at least this big
    span = (w - h) / 2;  // create some padding to the left hand side of the QR code to center it
    return h
  },
});

// this is likely shit too, TODO: find a way to make this unnecessary
Template.app.rendered = function() {
  // Once the page is rendered, adjust the padding to center the QR code.
  document.getElementById("codeBox").style.paddingLeft = span+"px";
}
