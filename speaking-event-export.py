import pandas as pd
from io import StringIO
import re
from datetime import datetime
import os

# Update the file path for Windows environment, assuming the folder is directly under the C: drive
file_path = os.path.join('C:', 'content', 'speaking.md')

with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

# Define the function for prepending the URL if necessary
def prepend_url(link):
    if pd.notnull(link) and not link.startswith('http'):
        return f'https://daron.blog{link}'
    return link

def is_valid_date(date_str):
    # A simple check to see if the date string is likely to be valid
    return not any(char in date_str for char in ('-', '_', '/'))

def date_to_yyyy_mm_dd(date_str, year):
    """
    Converts date strings to 'yyyy-mm-dd' format.
    Assumes date_str does not include the year if the same year is passed as an argument.
    """
    # Normalize the date string to ensure there's a space after the comma
    normalized_date_str = date_str.replace(',', ', ')

    if str(year) not in normalized_date_str:
        formatted_date_str = f"{normalized_date_str.strip()}, {year}"
    else:
        formatted_date_str = normalized_date_str.strip()

    # Make sure there are no double spaces after normalization
    formatted_date_str = formatted_date_str.replace('  ', ' ')

    try:
        date_obj = datetime.strptime(formatted_date_str, "%b %d, %Y")
        return date_obj.strftime('%Y-%m-%d')
    except ValueError as e:
        print(f"Error parsing date '{formatted_date_str}': {e}")
        return None

columns = ['Year', 'Event Name', 'Link', 'Topic', 'Date', 'Place']
df_events = pd.DataFrame(columns=columns)

year_sections = re.split(r'\n## (\d{4})\n', content)

for i in range(1, len(year_sections), 2):
    year = year_sections[i]
    table_content = year_sections[i + 1]
    table_io = StringIO(table_content)
    df_table = pd.read_csv(table_io, sep='|', skipinitialspace=True)
    df_table.dropna(axis=1, how='all', inplace=True)
    df_table.columns = df_table.columns.str.strip()
    df_table = df_table[df_table['Date'].apply(is_valid_date)]
    
    df_table[['Event Name', 'Link']] = df_table['Name'].str.extract(r'\[(.*?)\]\((.*?)\)', expand=True)
    df_table['Event Name'].fillna(df_table['Name'], inplace=True)
    df_table['Link'] = df_table['Link'].apply(prepend_url)
    df_table['Date'] = df_table['Date'].apply(lambda x: date_to_yyyy_mm_dd(x, year))
    df_table['Year'] = year
    df_table = df_table[['Year', 'Event Name', 'Link', 'Topic', 'Date', 'Place']]
    
    df_events = pd.concat([df_events, df_table], ignore_index=True)

df_events_cleaned = df_events.dropna(subset=['Link'])
df_events_cleaned['Date'] = df_events_cleaned['Date'].astype("string")
df_events_cleaned['Topic'] = df_events_cleaned['Topic'].str.strip()
df_events_cleaned['Place'] = df_events_cleaned['Place'].str.strip()

output_csv_path = os.path.join('C:', 'content', 'events_extracted.csv')
df_events_cleaned.to_csv(output_csv_path, index=False)

print(output_csv_path)
