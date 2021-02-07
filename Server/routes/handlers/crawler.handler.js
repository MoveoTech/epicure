const puppeteer = require('puppeteer');

const scrapeRestaurant = async (saerch) => {
    const query = saerch.split(' ').join('+');
    const baseURL = 'https://www.google.com/search?&q=';
    try {
        const browser = await puppeteer.launch({
            defaultViewport: null,
            args: ['--lang="en-US"'], //gets the return value in english,
            ignoreDefaultArgs: ["--enable-automation"]
        });
        let phoneNumber = ''
        let address = ''
        let activeTime = {

        }
        const page = await browser.newPage();
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en-ie'
        });
        await page.goto(baseURL + query + '+restaurant');

        const scrape = async (Xpath, value, day = 0) => {
            try {
                const [el] = await page.$x(Xpath);
                if (el) {
                    const txt = await el.getProperty('textContent');
                    if (value === 'address') {
                        address = await txt.jsonValue()
                    }
                    else if (value === 'phoneNum') {
                        phoneNumber = await txt.jsonValue()
                    }
                    else if (value === 'hours') {
                        switch (day) {
                            case 1:
                                activeTime.sunday = await txt.jsonValue()
                                break;
                            case 2:
                                activeTime.monday = await txt.jsonValue()
                                break;
                            case 3:
                                activeTime.tuesday = await txt.jsonValue()
                                break;
                            case 4:
                                activeTime.wednesday = await txt.jsonValue()
                                break;
                            case 5:
                                activeTime.thursday = await txt.jsonValue()
                                break;
                            case 6:
                                activeTime.friday = await txt.jsonValue()
                                break;
                            case 7:
                                activeTime.saturday = await txt.jsonValue()
                                break;

                            default:
                                break;
                        }
                    }
                }

            } catch (error) {
                console.log(error)
            }
        }
        //Address
        await scrape('/html/body/div[7]/div[2]/div[9]/div[3]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[3]/div/div/span[2]', 'address');
        await scrape('//*[@id="rhs"]/div/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/span[2]', 'address');
        await scrape('//*[@id="rhs"]/div/div[1]/div/div[1]/div/div[5]/div/div/span[2]', 'address');
        // Phone
        await scrape('/html/body/div[7]/div[2]/div[9]/div[3]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[5]/div/div/span[2]/a/span', 'phoneNum');
        await scrape('/html/body/div[7]/div[2]/div[9]/div[3]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[7]/div/div/span[2]/a/span', 'phoneNum');
        await scrape('//*[@id="rhs"]/div/div[1]/div/div[1]/div/div[3]/div/div[6]/div/div/span[2]/a/span', 'phoneNum');
        await scrape('//*[@id="rhs"]/div/div[1]/div/div[1]/div/div[7]/div/div/span[2]/a/span', 'phoneNum');
        // Open Hours
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[1]/td[2]', 'hours', 1);
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[2]/td[2]', 'hours', 2);
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[3]/td[2]', 'hours', 3);
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[4]/td[2]', 'hours', 4);
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[5]/td[2]', 'hours', 5);
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[6]/td[2]', 'hours', 6);
        await scrape('//*[@id="rhs"]/div[1]/div[1]/div/div[1]/div/div[3]/div/div[4]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[7]/td[2]', 'hours', 7);

        console.log({ phoneNumber, address, activeTime })
        await browser.close();
    } catch (error) {
        console.log(error)
    }

}

scrapeRestaurant('Teder')