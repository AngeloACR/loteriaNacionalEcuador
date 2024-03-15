- Galeazzo
    - The discounts works like so: if the total of all the tickets within a specific set of games and draws hit a set threshold, the cost per ticket of those specifics games and draws will cost a fixed percentage/amount lower. 
    - Integration with "descuentos" api, to retrieve all discounts/promotions available, preferably whenever the user logs in, and save this data to the store for later use.
    - Everytime a ticket is added to the cart, there should be a logic to analyze if a discount is applicable. This is by checking the threshold mentioned before (within the data retrieved) is met for every available discount, and if so, the discount should be applied to every ticket relevant for it.
    - We should have a "total" field for the sum of the amount of all tickets without discount, and a "totalConDescuento" field for the sum of the amount of all tickets with discounts. For instance, lets say we have 5 tickets, all of $1, but 3 of this tickets have a discount which make their value drops to $0.8, this will mean that:
        - Total = $5
        - Total con descuento = $4.4
    - This "totalConDescuento" field will be added to the request data of sell endpoint


- Alboran

    - We should analyze wheter the amount with discount should be sent within reserve endpoint or sell endpoing
    - The amount with discount will be the one used to deduct the user balance
    - A discount line should be added to the "plantilla contable"
    - In the "reporteria" there should be a cell for the discount

- Angelo

    - CRUD for the discounts
        - Create a discount
        - Get all active discounts
    - Create db schema for this, which should include:
        - Minimum value of purchase for the discount to be applied
        - Maximum value of purchase (validate the use of this one)
        - Games involved in the discount
        - Draws involved in the discount
        - Initial date
        - Final date
        - Percentage/amount of discount (Validate if it will be a fixed value, or a fixed percentage)
        - (Optional) Discount over specific tickets or over order (validate this info as well)
        - Boolean to check if discount is active
    - Cronjob to automatically validate if the discount is still active, validating final date agains current date
    - Simple web interface to setup a discount
        - Initial date only as future dates
        - Final date should be the same or higher than initial date
        - Be able to select multiple or all games
        - Be able to select multiple or all draws according to the games selected, and that are available within the selected dates
    - Add two components, one for discount creation and one for discounts list, with its respective routing and a simple header to navigate inbetween