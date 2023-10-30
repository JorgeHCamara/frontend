import { InputLabel, TextField, Select, MenuItem, Button } from '@mui/material';

interface FilterSectionProps {
    nameFilter: string;
    setNameFilter: (value: string) => void;
    categoryFilter: string;
    setCategoryFilter: (value: string) => void;
}

const FilterSection = ({
    nameFilter,
    setNameFilter,
    categoryFilter,
    setCategoryFilter,
}: FilterSectionProps) => {
    return (
        <div className="filter-section">
            <InputLabel>Filter by Name</InputLabel>
            <TextField 
                variant="outlined"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
            />
            <InputLabel>Product Type</InputLabel>
            <Select 
                label="Filter by Category"
                variant="outlined"
                className="categoryInput"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
            >
                <MenuItem value="Appliances">Appliances</MenuItem>
                <MenuItem value="Furniture">Furniture</MenuItem>
                <MenuItem value="Refrigerators">Refrigerators</MenuItem>
                <MenuItem value="Smartphones">Smartphones</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
            </Select>
            <Button onClick={() => {
                setNameFilter('');
                setCategoryFilter('');
            }}>
                Clear Filters
            </Button>
        </div>
    );
}

export default FilterSection;
