const IncomeSchema = require('../models/IncomeModel')

exports.addIncome = async (req,res) => {
    
    const {title,amount,Category,description,Date} = req.body

    console.log('object');
    try{
        if(!title || !amount || !Category || !description || !Date)
        {
            return res.status(400).json({message:"All fields are required"})
        }
        if(amount <=0 || !amount === 'number')
        {
            return res.status(400).json({message:"Amount should be positive Number"})
        }
        const income = IncomeSchema({
            title,
            amount,
            Category,
            description,
            Date
        })
        await income.save()
        res.status(200).json({message:'Amount Added'})
    }
    catch(error){
        res.status(404).json({message:'Server Error'})
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