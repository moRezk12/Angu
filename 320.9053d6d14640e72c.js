"use strict";(self.webpackChunkE_commerce=self.webpackChunkE_commerce||[]).push([[320],{7320:(l,c,o)=>{o.r(c),o.d(c,{CategorydetailsComponent:()=>r});var n=o(6814),e=o(4769),u=o(1120),s=o(0);function d(a,p){if(1&a&&(e.TgZ(0,"section",3)(1,"div",4)(2,"div",5),e._UZ(3,"img",6),e.qZA(),e.TgZ(4,"div",5)(5,"h2"),e._uU(6),e.qZA()()()()),2&a){const t=e.oxw();e.xp6(3),e.Q6J("src",t.categoryDetails.image,e.LSH)("alt",t.categoryDetails.name),e.xp6(3),e.Oqu(t.categoryDetails.name)}}let r=(()=>{class a{constructor(t,i){this._ActivatedRoute=t,this._ProductService=i,this.CategoryId="",this.categoryDetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.CategoryId=t.get("id")}}),this._ProductService.getCategoriesDetails(this.CategoryId).subscribe({next:t=>{console.log(t),this.categoryDetails=t.data}})}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(u.gz),e.Y36(s.M))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-categorydetails"]],standalone:!0,features:[e.jDz],decls:24,vars:1,consts:[["class"," mx-auto shadow rounded w-75 bg-main-light p-3 my-2",4,"ngIf"],[1,"container","fs-5","text-muted"],[1,"text-center","text-info","m-4"],[1,"mx-auto","shadow","rounded","w-75","bg-main-light","p-3","my-2"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"]],template:function(i,g){1&i&&(e.YNc(0,d,7,3,"section",0),e.TgZ(1,"section",1)(2,"h2",2),e._uU(3,"About"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Welcome to E-commerce, your one-stop destination for all your shopping needs! Explore an extensive range of products carefully curated to cater to your diverse tastes and preferences. At E-commerce , we believe in delivering an unparalleled shopping experience, characterized by convenience, quality, and affordability. Whether you're looking for the latest fashion trends, must-have gadgets, home essentials, or unique gifts, we've got you covered.\n"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"p"),e._uU(8,"Why shop with us?"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"p"),e._uU(11,"Wide Selection: Browse through a vast array of products across multiple categories, ensuring that you find exactly what you're looking for."),e.qZA(),e.TgZ(12,"p"),e._uU(13,"Quality Assurance: We partner with trusted brands and suppliers to offer products that meet the highest standards of quality and durability."),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Competitive Prices: Enjoy competitive pricing on all our products, along with regular discounts and special offers to help you save more."),e.qZA(),e.TgZ(16,"p"),e._uU(17,"Convenient Shopping: Our user-friendly interface and secure payment gateway make shopping online a breeze. With just a few clicks, you can place your order and have it delivered straight to your doorstep."),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Customer Satisfaction: Your satisfaction is our top priority. Our dedicated customer support team is always ready to assist you with any queries or concerns you may have."),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Fast Shipping: We understand the importance of timely delivery. That's why we strive to process and dispatch your orders swiftly, ensuring that you receive them in a timely manner."),e.qZA(),e.TgZ(22,"p"),e._uU(23,"Discover the joy of hassle-free shopping at [Your E-commerce Website Name]. Start exploring our collection today and experience the convenience of online shopping like never before!."),e.qZA()()),2&i&&e.Q6J("ngIf",g.categoryDetails._id)},dependencies:[n.ez,n.O5]})}return a})()},0:(l,c,o)=>{o.d(c,{M:()=>u});var n=o(4769),e=o(9862);let u=(()=>{class s{constructor(r){this._HttpClient=r,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(r=1){return this._HttpClient.get(this.baseUrl+`products?page=${r}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoriesDetails(r){return this._HttpClient.get(this.baseUrl+`categories/${r}`)}getProductDetails(r){return this._HttpClient.get(this.baseUrl+`products/${r}`)}prand(){return this._HttpClient.get(this.baseUrl+"brands")}static#e=this.\u0275fac=function(a){return new(a||s)(n.LFG(e.eN))};static#t=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);