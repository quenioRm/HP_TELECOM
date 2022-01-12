import ApiCep from "../../../../services/ApiCep";

const HomeService = () => {

    const handleCepAvailable = async e => {
        await ApiCep.post("44500000/json/")
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {

        })
    }


    return {
        handleCepAvailable
    }

}

export default HomeService;