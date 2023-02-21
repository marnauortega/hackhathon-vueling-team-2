from flask import Flask, jsonify, request
from pulp import *
import pandas as pd



app = Flask(__name__)

from handling import handlings

# Testing Route
@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'response': 'pong!'})

@app.route('/handling', methods=['POST'])
def handling():
    handling_parameters = {
        'day': request.json['day'],
        'costs': request.json['costs'],
    }
    d_j = {}
    d_e = {}
    d_c = {}

    for i in handling_parameters['costs']:
        if i['employeeType'] =='JARDINERA':
            price_jp = i['partTimeCost']
            price_jf = i['fullTimeCost']
        if i['employeeType'] =='COORDINADOR':
            price_cp = i['partTimeCost']
            price_cf = i['fullTimeCost']
        if i['employeeType'] =='EQUIPAJES':
            price_ep = i['partTimeCost']
            price_ef = i['fullTimeCost']

    # BACKEND PARAMETERS
    dia = handling_parameters['day']

    df = pd.read_csv('input-ground-handling-optimizer2.csv', sep=';')

    df[['date_start', 'start']] = df['ts_operation_start'].str.rsplit(pat=' ', n=1, expand=True)
    df[['date_end', 'end']] = df['ts_operation_end'].str.rsplit(pat=' ', n=1, expand=True)
    df['h_start'] = df['start'].apply(lambda x: x[:2]).astype(int)
    df['h_end'] = df['end'].apply(lambda x: int(x[:2])-1 if(x[3:5] == '00') else x[:2]).astype(int)
    df['required_employees'] = df['required_employees'].astype(int)
    df = df[df['dt_flight'] == dia]

    for index, row in df.iterrows():
        if row['handling_function'] == 'JARDINERA':
            for hour in range(6, 24):
                if hour not in d_j:
                    d_j[hour] = 0
                total_time = range(row['h_start'], row['h_end']+1)
                if hour in total_time:
                    d_j[hour] += row['required_employees']
        elif row['handling_function'] == 'EQUIPAJES':
            for hour in range(6, 24):
                if hour not in d_e:
                    d_e[hour] = 0
                total_time = range(row['h_start'], row['h_end']+1)
                if hour in total_time:
                    d_e[hour] += row['required_employees']
        elif row['handling_function'] == 'COORDINADOR':
            for hour in range(6, 24):
                if hour not in d_c:
                    d_c[hour] = 0
                total_time = range(row['h_start'], row['h_end']+1)
                if hour in total_time:
                    d_c[hour] += row['required_employees']

    for key in d_j:
        if d_j[key] == 0:
            d_j[key] = 1

    for key in d_e:
        if d_e[key] == 0:
            d_e[key] = 1

    for key in d_c:
        if d_c[key] == 0:
            d_c[key] = 1

    jardinera = [4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 4*price_jp, 8*price_jf, 8*price_jf]
    equipaje = [4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 4*price_ep, 8*price_ef, 8*price_ef]
    coord = [4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 4*price_cp, 8*price_cf, 8*price_cf]

    matrix_total = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                    jardinera, equipaje, coord
                    ]

    # number of shifts
    n_total = 17

    # number of time windows
    T = 18

    # number of workers required per time window
    # d

    # wage rate per shift
    w_total_j = matrix_total[-3]
    w_total_e = matrix_total[-2]
    w_total_c = matrix_total[-1]

    # Decision variables
    y_total_j = LpVariable.dicts("num_workers", list(range(n_total)), lowBound=0, cat="Integer")
    y_total_e = LpVariable.dicts("num_workers", list(range(n_total)), lowBound=0, cat="Integer")
    y_total_c = LpVariable.dicts("num_workers", list(range(n_total)), lowBound=0, cat="Integer")

    # Create problem
    prob_total_j = LpProblem("scheduling_workers", LpMinimize)
    prob_total_e = LpProblem("scheduling_workers", LpMinimize)
    prob_total_c = LpProblem("scheduling_workers", LpMinimize)

    prob_total_j += lpSum([w_total_j[j] * y_total_j[j] for j in range(n_total)])
    prob_total_e += lpSum([w_total_e[j] * y_total_e[j] for j in range(n_total)])
    prob_total_c += lpSum([w_total_c[j] * y_total_c[j] for j in range(n_total)])

    for t in range(T):
        prob_total_j += lpSum([matrix_total[t][j] * y_total_j[j] for j in range(n_total)]) >= d_j[t + 6]
        prob_total_e += lpSum([matrix_total[t][j] * y_total_e[j] for j in range(n_total)]) >= d_e[t + 6]
        prob_total_c += lpSum([matrix_total[t][j] * y_total_c[j] for j in range(n_total)]) >= d_c[t + 6]

    prob_total_j.solve()
    prob_total_e.solve()
    prob_total_c.solve()

    print(d_j)
    print(d_e)
    print(d_c)

    for shift_total in range(n_total):
        print(
            f"Workers JARDINERA TOTAL TIME - Shift {shift_total+6}-{shift_total+10} is {int(y_total_j[shift_total].value())} workers"
        )
    for shift_total in range(n_total):
        print(
            f"Workers EQUIPAJE TOTAL TIME - Shift {shift_total+6}-{shift_total+10} is {int(y_total_e[shift_total].value())} workers"
        )
    for shift_total in range(n_total):
        print(
            f"Workers COORDINADOR TOTAL TIME - Shift {shift_total+6}-{shift_total+10} is {int(y_total_c[shift_total].value())} workers"
        )

    result = pd.DataFrame(columns=['day', 'hour', 'handlingFunction', 'fulltimeEmployees', 'parttimeEmployees',
                                'totalEmployees', 'fulltimeCost', 'parttimeCost', 'totalCost'])

    d_shift_j = {}
    d_shift_e = {}
    d_shift_c = {}
    horari_mati = (6,7,8,9,11,12,13,14)
    horari_tarda = (15,16,17,18,20,21,22,23)

    for i in range(6, 24):
        d_shift_j[i] = 0
        d_shift_e[i] = 0
        d_shift_c[i] = 0


    # JARDINERA
    for shift in range(15):
        if shift+9 <= 23:
            d_shift_j[shift + 6] += y_total_j[shift].value()
            d_shift_j[shift + 7] += y_total_j[shift].value()
            d_shift_j[shift + 8] += y_total_j[shift].value()
            d_shift_j[shift + 9] += y_total_j[shift].value()

    for hour in range(6, 24):
        handling = 'JARDINERA'
        p_emp = int(d_shift_j[hour])
        if hour in horari_mati:
            ft_emp = int(y_total_j[15].value())
        elif hour in horari_tarda:
            ft_emp = int(y_total_j[16].value())
        else:
            ft_emp = 0

        new_row = {'day': dia, 'hour': hour, 'handlingFunction': handling, 'fulltimeEmployees': ft_emp,
                'parttimeEmployees': p_emp}
        result = result.append(new_row, ignore_index=True)

    # EQUIPAJES
    for shift in range(15):
        if shift + 9 <= 23:
            d_shift_e[shift + 6] += y_total_e[shift].value()
            d_shift_e[shift + 7] += y_total_e[shift].value()
            d_shift_e[shift + 8] += y_total_e[shift].value()
            d_shift_e[shift + 9] += y_total_e[shift].value()

    for hour in range(6, 24):
        handling = 'EQUIPAJES'
        p_emp = int(d_shift_e[hour])
        if hour in horari_mati:
            ft_emp = int(y_total_e[15].value())
        elif hour in horari_tarda:
            ft_emp = int(y_total_e[16].value())
        else:
            ft_emp = 0

        new_row = {'day': dia, 'hour': hour, 'handlingFunction': handling, 'fulltimeEmployees': ft_emp,
                'parttimeEmployees': p_emp}
        result = result.append(new_row, ignore_index=True)

    # COORDINADOR
    for shift in range(15):
        if shift + 9 <= 23:
            d_shift_c[shift + 6] += y_total_c[shift].value()
            d_shift_c[shift + 7] += y_total_c[shift].value()
            d_shift_c[shift + 8] += y_total_c[shift].value()
            d_shift_c[shift + 9] += y_total_c[shift].value()

    for hour in range(6, 24):
        handling = 'COORDINADOR'
        p_emp = int(d_shift_c[hour])
        if hour in horari_mati:
            ft_emp = int(y_total_c[15].value())
        elif hour in horari_tarda:
            ft_emp = int(y_total_c[16].value())
        else:
            ft_emp = 0

        new_row = {'day': dia, 'hour': hour, 'handlingFunction': handling, 'fulltimeEmployees': ft_emp, 'parttimeEmployees': p_emp}
        result = result.append(new_row, ignore_index=True)

    for index, row in result.iterrows():
        if row['handlingFunction'] == 'JARDINERA':
            row['fulltimeCost'] = row['fulltimeEmployees'] * price_jf
            row['parttimeCost'] = row['parttimeEmployees'] * price_jp
        elif row['handlingFunction'] == 'EQUIPAJES':
            row['fulltimeCost'] = row['fulltimeEmployees'] * price_ef
            row['parttimeCost'] = row['parttimeEmployees'] * price_ep
        elif row['handlingFunction'] == 'COORDINADOR':
            row['fulltimeCost'] = row['fulltimeEmployees'] * price_cf
            row['parttimeCost'] = row['parttimeEmployees'] * price_cp

    result['totalEmployees'] = result['fulltimeEmployees'] + result['parttimeEmployees']
    result['totalCost'] = result['fulltimeCost'] + result['parttimeCost']

    result['totalCost'] = result['totalCost'].astype(float)
    result['fulltimeCost'] = result['fulltimeCost'].astype(float)
    result['parttimeCost'] = result['parttimeCost'].astype(float)

    result = result.to_json(orient='records', date_format='iso')
    return jsonify(json.loads(result))


if __name__ == '__main__':
    app.run(debug=True, port=4000)
