/** @format */
import { ISpellingList } from "@/interfaces/ISpellingList";
import { Page, Text, View, Document, StyleSheet, DocumentProps } from "@react-pdf/renderer";
import { dropLettersFromWord, shuffleArray } from "./wordUtilities";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    paddingBottom: 70,
    position: "relative",
  },

  footer: {
    position: "absolute",
    bottom: 70,
    color: "#999",
    left: 0,
    right: 0,
    textAlign: "center", // Center the page number
    fontSize: 9,
  },

  wordBankContainer: { border: "1px solid #000", padding: 10, flexGrow: 0 },

  wordBank: {
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center",
    columnGap: "20px",
    flexDirection: "row",
    justifyContent: "center",
  },

  wordContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between", // Ensures space between the two columns
    flexGrow: 1, // Allow this to take up the remaining space
    padding: "0 20px",
    paddingTop: "20px",
  },

  word: {
    width: "48%", // Slightly less than 50% to create space for the 20px gap
    fontSize: 14,
    letterSpacing: 5,
    borderBottom: "1px dotted black", // Adds a dotted line under each word
    marginBottom: 15, // Adds extra space between words
    boxSizing: "border-box",
  },

  titleText: { textAlign: "center", fontWeight: "black", fontSize: 15, color: "#666", marginBottom: 10, padding: 5 },

  noWordsLabel: { textAlign: "center", fontSize: 15 },
});

export const MissingLetter = ({
  focusedList,
  documentProps,
}: {
  focusedList: ISpellingList;
  documentProps?: DocumentProps;
}) => {
  const { words } = focusedList;

  const PageHeader = () => {
    return <Text style={styles.titleText}>{focusedList.title} (Missing Letter)</Text>;
  };

  const WordBank = () => {
    return (
      <View style={styles.wordBankContainer}>
        <View style={styles.wordBank}>
          {focusedList.words.length === 0 ? (
            <Text style={styles.noWordsLabel}>Your list contained no words</Text>
          ) : (
            shuffleArray(focusedList.words).map((word, index) => (
              <Text key={index} style={{ fontSize: 20, margin: "2.5px 0" }}>
                {word}
              </Text>
            ))
          )}
        </View>
      </View>
    );
  };

  return (
    <Document {...documentProps}>
      <Page size="A4" style={styles.page}>
        <PageHeader />

        <WordBank />

        <View style={styles.wordContainer}>
          {words.map((word, index) => (
            <Text key={index} style={styles.word}>
              {dropLettersFromWord(word)}
            </Text>
          ))}
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `${focusedList.title} (Missing Letter) | Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
