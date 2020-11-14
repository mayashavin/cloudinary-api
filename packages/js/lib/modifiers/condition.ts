export const condition = ():string => {
  // if(value = "") {
  //   var i, ifVal, j, ref, trIf, trRest;
  //   switch (value) {
  //     case "else":
  //       this.chain();
  //       return this.param(value, "if", "if");
  //     case "end":
  //       this.chain();
  //       for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
  //         ifVal = this.chained[i].getValue("if");
  //         if (ifVal === "end") {
  //           break;
  //         } else if (ifVal != null) {
  //           trIf = Transformation.new().if(ifVal);
  //           this.chained[i].remove("if");
  //           trRest = this.chained[i];
  //           this.chained[i] = Transformation.new().transformation([trIf, trRest]);
  //           if (ifVal !== "else") {
  //             break;
  //           }
  //         }
  //       }
  //       return this.param(value, "if", "if");
  //     case "":
  //       return Condition.new().setParent(this);
  //     default:
  //       return this.param(value, "if", "if", function (value) {
  //         return Condition.new(value).toString();
  //       });
  //   }
  return ''
}