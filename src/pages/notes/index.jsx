import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Chip from "@material-ui/core/Chip";
import './index.css';

const NoteTags = ({ tags, handleTagClick }) => (
    <Box display="flex" flexWrap="wrap" alignItems="center" mb="20px">
        {tags.map((tag) => (
            <Chip
                key={tag}
                label={tag}
                mr="10px"
                mb="10px"
                mx="10px"
                my="10px"
                onClick={() => handleTagClick(tag)}
            />
        ))}
    </Box>
);


const Notes = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const allNotes = [
        {
            title: "An Important Question",
            subtitle: "Important notes about surfing spots",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            tags: ["surfing", "spots"]
        },
        {
            title: "Another Important Question",
            subtitle: "Important notes about surfing spots",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            tags: ["surfing", "beaches"]
        }
    ];
    // Create an array of unique tags
    const uniqueTags = Array.from(new Set(allNotes.flatMap((note) => note.tags)));

    // Define state variables to keep track of the selected tag and filtered notes
    const [notes, setNotes] = useState(allNotes);

    // Define function to handle tag clicks
    const handleTagClick = (tag) => {
        setNotes(allNotes.filter((note) => note.tags.includes(tag)));
    };


    return (
        <Box m="20px">
            <Header title="Notes" subtitle="Important notes about surfing spots" />
            <NoteTags tags={uniqueTags} handleTagClick={handleTagClick} />
            {notes.map((note) => (
                <Accordion key={note.title}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            {note.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{note.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default Notes;