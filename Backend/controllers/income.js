const IncomeSchema = require('../models/IncomeModel')

exports.addIncome = async (req,res) => {
    
    let {title,amount,category,description,date} = req.body
    amount = parseInt(amount);
    console.log(req.body);
    
    try{
        if(!title || !amount || !category || !description || !date)
        {
            return res.status(400).json({message:"All fields are required"})
        }
        if(amount <=0)
        {
            return res.status(400).json({message:"Amount should be positive Number"})
        }
        console.log("data not saved" , typeof(amount));
        try {
            const income = IncomeSchema({
                title,
                amount,
                category,
                description,
                date
            });
            console.log("data saved");
            await income.save()
        } catch (error) {
            console.log(error)
        }
        return res.status(200).json({message:'Amount Added'})
    }
    catch(error){
        return res.status(404).json({message:'Server Error'})
    }
}

exports.getIncomes = async (req,res) =>{
    try{
        const incomes = await IncomeSchema.find().sort({createdAt : -1})
        res.status(200).json(incomes)
    }
    catch(error)
    {
        res.status(404).json({message:'Server Error'})
    }
}

exports.deleteIncomes = async (req,res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:'Income Deleted'})
    })
    .catch((error)=>{
        res.status(500).json({message:'Server Error'})
    })
}