$('#data-capture-form').one('submit', (evt) => {
    evt.preventDefault()

    const elements = evt.currentTarget.elements
    const elementsArray = Object.keys(elements).map((k) => elements[k])
    const formValues = []


    $(elementsArray).each((i, el) => {
        formValues.push({
            name: el.name,
            value: el.value
        })
    })

    console.log(formValues)

    // $(evt.currentTarget).submit();
})