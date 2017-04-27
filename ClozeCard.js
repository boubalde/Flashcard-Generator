var Clozecard = function(text, cloze) {

    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace( this.cloze , '....');
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }
    this.printPartial = function(){
        console.log(this.partial);
    }
    //this.partial = this.text.replace( this.cloze , '....');

}

Clozecard.prototype.printAnswer = function() {

    console.log(this.text);
}

module.exports = Clozecard;