exports.homepage =
  class homepage {
    page: any
    productList: string
    addToCartbtn: string;
    cart: string;

    constructor(page: any) {
      this.page = page;
      this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
      this.addToCartbtn='//a[normalize-space()="Add to cart"]';
      
      this.cart='#cartur'

    }

    async addProductToCart(productName: any) {
     
    const productList = await this.page.$$(this.productList);
    for(const product of productList)
    {
        if(productName === await product.textContent())
        {
           await product.click()
           break;
        }
    }

    await this.page.on('dialog',async (dialog: any)=>{

    if(dialog.message().includes('added')){
      await dialog.accept();
    }
      
    })
    await this.page.locator(this.addToCartbtn).click();

    }

    async gotoCart()
    {
      await this.page.locator(this.cart).click();
    }

  }

