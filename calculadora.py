def calcular():
    while True:
        print("\n--- Calculadora Interativa ---")

        try:
            num1 = float(input("Digite o primeiro número: "))
            num2 = float(input("Digite o segundo número: "))
        except ValueError:
            print("Por favor, digite apenas números.")
            continue

        while True:
            operacao = input("Escolha a operação (+, -, *, /): ")

            if operacao == "+":
                resultado = num1 + num2
                break
            elif operacao == "-":
                resultado = num1 - num2
                break
            elif operacao == "*":
                resultado = num1 * num2
                break
            elif operacao == "/":
                if num2 == 0:
                    print("Não é possível dividir por zero. Escolha outra operação.")
                    continue
                resultado = num1 / num2
                break
            else:
                print("Operação inválida! Tente novamente.")

        print(f"Resultado: {resultado}")

        repetir = input("Deseja fazer outro cálculo? (s/n): ").lower()
        if repetir != "s":
            print("Encerrando a calculadora. Até a próxima!")
            break


# Execução
calcular()
