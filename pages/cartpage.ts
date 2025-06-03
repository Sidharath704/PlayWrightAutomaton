exports.cartpage=
class cartpage{
    page: any;
    noOfProducts: string;
    constructor(page: any)
    {
         this.page=page;
         this.noOfProducts='//tbody[@id="tbodyid"]/tr/td[2]'
    }

    async checkProductInCart(productName: any)
    {
        const productsInCart=await this.page.$$(this.noOfProducts);
        for(const product of productsInCart){

            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
    }
}