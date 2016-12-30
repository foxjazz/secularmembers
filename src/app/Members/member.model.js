"use strict";
var Member = (function () {
    /*
        static clone(member: Member): Member {
            return new Member(member.name, member.done);
        }
    */
    function Member(email, done) {
        if (done === void 0) { done = false; }
        this.email = email;
        this.completed = done;
        this.joinedDate = new Date();
        this.payments = new Array();
    }
    Member.prototype.clear = function () {
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.completed = false;
    };
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.model.js.map