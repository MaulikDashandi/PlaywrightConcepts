import {test,expect} from "@playwright/test"

test('Get booking details by Id - path param', async ({request})=>{

    const bookingId = 1 //we can use this as path parameter

    //sending get request along with path parameter
    const response = await request.get(`/booking/${bookingId}`);

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertion
    expect(response.status).toBe(200);
    expect(response.ok).toBeTruthy();

})

test.only('Get booking details by name - query param', async ({request})=>{

    const firstName = '';
    const lastName = '';

    //sending get request along with path parameter
    const response = await request.get("/booking",{ params:{firstName,lastName} });

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertion
    expect(response.status).toBe(200);
    expect(response.ok).toBeTruthy();

    //verify response should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody)
    {
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe("number");
        expect(item.bookingid).toBeGreaterThan(0);
    }

})