"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var member_model_1 = require("./member.model");
var angularfire2_1 = require("angularfire2");
var MemberlistComponent = (function () {
    function MemberlistComponent(af) {
        this.showCompleted = true;
        this.member = new member_model_1.Member('Add me to list!', false);
        this.memberlist = af.database.list('./members');
    }
    MemberlistComponent.prototype.addMember = function () {
        //let m = new Member('',false);
        this.memberlist.push(this.member);
        this.member = new member_model_1.Member('', false);
        this.member.clear();
    };
    MemberlistComponent.prototype.delMember = function (i) {
        /*let m = memberlist[i];
        this.memberlist.remove(memberlist[i].email)*/
    };
    return MemberlistComponent;
}());
MemberlistComponent = __decorate([
    core_1.Component({
        selector: 'as-memberlist',
        templateUrl: 'memberlist.html'
    }),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], MemberlistComponent);
exports.MemberlistComponent = MemberlistComponent;
//# sourceMappingURL=memberlist.component.js.map