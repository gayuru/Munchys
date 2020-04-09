//
//  RegisterViewController.swift
//  Munchys
//
//  Created by Gayuru Gunawardana on 9/4/20.
//  Copyright © 2020 cloud. All rights reserved.
//


import UIKit

class RegisterViewController: UIViewController {




    @IBOutlet weak var passwordField: UITextField!
    @IBOutlet weak var emailField: UITextField!
    @IBOutlet weak var usernameField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let bottomLine = CALayer()
        bottomLine.frame = CGRect(x: 0, y: usernameField.frame.height-2, width: usernameField.frame.width, height: 0.5)
        bottomLine.backgroundColor=UIColor.init(red:0.55, green:0.58, blue:0.66, alpha:1.00).cgColor
        
        let bottomLineP = CALayer()
        bottomLineP.frame = CGRect(x: 0, y: passwordField.frame.height-2, width: passwordField.frame.width, height: 0.5)
        bottomLineP.backgroundColor=UIColor.init(red:0.55, green:0.58, blue:0.66, alpha:1.00).cgColor
        
        let bottomLineE = CALayer()
         bottomLineE.frame = CGRect(x: 0, y: emailField.frame.height-2, width: emailField.frame.width, height: 0.5)
         bottomLineE.backgroundColor=UIColor.init(red:0.55, green:0.58, blue:0.66, alpha:1.00).cgColor
        
        
        usernameField.borderStyle = .none
        passwordField.borderStyle = .none
        emailField.borderStyle = .none
        
        usernameField.layer.addSublayer(bottomLine)
        
        passwordField.isSecureTextEntry = true
        emailField.layer.addSublayer(bottomLineE)
        
        passwordField.layer.addSublayer(bottomLineP)
        
    }


}

