from flask import Flask
import pandas as pd

def create_job_list(city, type):
    df = read_data_from_csv()
    df_city = filter_by_city(df, city)
    df_matched, df_close = filter_by_type(df_city, type)

    return df_matched, df_close


def read_data_from_csv():
    data = pd.read_csv("./jobs_database.csv")
    return data


def filter_by_city(df, city):
    matched_city_list = pd.DataFrame()
    for index, row in df.iterrows():
        if row[4] == city:
            matched_city_list = matched_city_list.append(row)
    return matched_city_list

def filter_by_type(df, type):  # types is a list
    matched_type_list = pd.DataFrame()
    remaining_type_list = pd.DataFrame()

    for index, row in df.iterrows():
        if row[2] == type:
            matched_type_list = matched_type_list.append(row)
        else:
            remaining_type_list = remaining_type_list.append(row)
    return matched_type_list, remaining_type_list


if __name__ == "__main__":
    df1, df2 = create_job_list("San Diego", "Plumbing")
    print(df1)
    print(df2)
