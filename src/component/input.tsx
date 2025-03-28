import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";



export function NumberInput({ isAdornments, label, onChange }) {
    const [value, setValue] = React.useState(0);

    const handleDecrease = () => {
        setValue((prev) => Math.max(prev - 1, 0)); // Уменьшаем значение
        onChange && onChange(value - 1);
    }
    const handleIncrease = () => {
        setValue((prev) => prev + 1); // Увеличиваем значение
        onChange && onChange(value + 1);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setValue(newValue); // Устанавливаем значение из ввода
            onChange && onChange(newValue);
        }
    }
    const useAdornments =()=> ({
        startAdornment: (
            <InputAdornment position="start">
                <IconButton sx={{color:'black'}} onClick={handleDecrease}>
                    <Remove />
                </IconButton>
            </InputAdornment>
        ),
        endAdornment: (
            <InputAdornment position="end">
                <IconButton sx={{color:'black'}} onClick={handleIncrease}>
                    <Add />
                </IconButton>
            </InputAdornment>
        ),
    });


    return (
        <TextField
            type="number"
            label={label}
            value={value}
            onChange={handleChange}
            InputProps={{
                sx: {
                    color: "black",
                    textAlign: "center",
                    border: '1px solid #EBEBEB',
                    borderRadius: '20px',
                    "& input": {
                        textAlign: "center"
                    }
                },
                ...(isAdornments ? useAdornments() : {}),
            }}
            InputLabelProps={{
                sx: {
                    fontSize: '16px',
                    color: "#9F9F9F",
                    padding: "0 5px", // Отступы для предотвращения перекрытия
                    position: "absolute", // Абсолютное позиционирование для подписи
                    transform: "translateY(-90%)",
                    "&.Mui-focused": {
                        color: "gray"
                    },
                },
            }}
            sx={{ width: '100%' }}
        />
    );
}